<?php

namespace App\Http\Resources\Api\V1\Message;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessagePinResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'      => $this->id,
            'message' => [
                'id'   => $this->message->id,
                'type' => $this->message->type,
                'text' => $this->message->text
            ]
        ];
    }
}
