<?php

namespace App\Http\Controllers\Api\V1\Message;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Message\UpSerMessageRequest;
use App\Http\Resources\Api\V1\Message\MessageResource;
use App\Models\File;
use App\Models\Group;
use App\Models\Message;
use App\Models\MessageRecipient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class MessageController extends BaseController
{

    /**
     * Show all message in group
     *
     * @param Group $group
     * @return AnonymousResourceCollection
     */
    public function index(Group $group): AnonymousResourceCollection
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

    /**
     * Update message & recipient
     *
     * @param UpSerMessageRequest $request
     * @param Group $group
     * @return JsonResponse
     */
    public function store(UpSerMessageRequest $request, Group $group): JsonResponse
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

        return $this->sendResponse($message, 'Message created successfully.');
    }

    /**
     * Update message & recipient
     *
     * @param UpSerMessageRequest $request
     * @param Group $group
     * @param Message $message
     * @return JsonResponse
     */
    public function update(UpSerMessageRequest $request, Group $group, Message $message): JsonResponse
    {
        Gate::authorize('update', $message);

        $isParticipant = $group->messageRecipients()
            ->where('message_id', $message)
            ->exists();

        if(!$isParticipant) {
            return $this->sendError('You do not have permission');
        }

        $message->update([
            'text' => $request->get('text'),
        ]);

        $message->recipient()->update([
            'is_edited' => true
        ]);

        return $this->sendResponse($message, 'Message updated successfully.');
    }

    /**
     * Delete message & update recipient
     *
     * @param Group $group
     * @param Message $message
     * @return JsonResponse
     */
    public function destroy(Group $group, Message $message): JsonResponse
    {
        Gate::authorize('delete', $message);

        $isParticipant = $group->messageRecipients()
            ->where('message_id', $message)
            ->exists();

        if(!$isParticipant) {
            return $this->sendError('You do not have permission');
        }

        $message->update([
            'text' => '',
        ]);

        $message->recipient()->update([
            'is_deleted' => true
        ]);

        return $this->sendResponse([], 'Message deleted successfully.');
    }
}
