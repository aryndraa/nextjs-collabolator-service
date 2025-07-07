<?php

namespace App\Http\Controllers\Api\V1\Message;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Message\UpSerMessageRequest;
use App\Http\Resources\Api\V1\Message\MessageResource;
use App\Models\File;
use App\Models\Group;
use App\Models\Message;
use App\Models\MessageRecipient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class MessageController extends Controller
{
    public function index(Group $group)
    {
        Gate::authorize('view', $group);

        $messages = MessageRecipient::query()
            ->where('group_id', $group->id)
            ->with([
                'message',
                'message.user.profile',
                'message.file',
                'replyToMessage',
                'replyToMessage.user.profile'
            ])
            ->get();

        return MessageResource::collection($messages);
    }

    public function store(UpSerMessageRequest $request, Group $group)
    {
        Gate::authorize('view', $group);

        $userId  = Auth::id();
        $message =  message::query()->make([
            'group_id' => $group,
            'user_id' => $userId,
        ]);

        if($request->get('type') === "link") {
            $message->type = 'link';
            $message->text = $request->get('text');
            $message->save();
        } else if ($request->get('type') === "text") {
            $message->type = 'text';
            $message->text = $request->get('text');
            $message->save();
        }

        if($request->hasFile('file')) {
            $file = $request->file('file');
            File::uploadFile($file, $message, 'file', 'message/files');
        }

        $recipient = new MessageRecipient([
            'group_id' => $group->id,
        ]);

        if ($request->has('reply_to')) {
            $recipient->reply_to_message_id = $request->get('reply_to');
        }

        $message->recipient()->save($recipient);

        return response()->json($message);
    }


}
