<?php

namespace App\Http\Resources\Api\V1\Message;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'message' => [
                'id'   => $this->message->id,
                'type' => $this->message->type,
                'text' => $this->message->text,
                'user' => [
                    'name'   => $this->message->user->profile->name,
                    'avatar' => $this->message->user->profile->avatar->file_url,
                ],
                'file' =>
                    [
                        'id' => $this->message->file->id ?? null,
                        'file_name' => $this->message->file->file_name ?? null,
                        'file_size' => $this->message->file->file_size ?? null,
                        'file_path' => $this->message->file->file_path ?? null,
                        'file_url' => $this->message->file->file_url ?? null,
                    ] ?? null
            ],
            'is_read'    => $this->is_read,
            'is_deleted' => $this->is_deleted,
            'is_edited'  => $this->is_edited,
            'is_pin'     => $this->is_pin,
            'created_at' => $this->created_at->toISOString()
        ];
    }
}
