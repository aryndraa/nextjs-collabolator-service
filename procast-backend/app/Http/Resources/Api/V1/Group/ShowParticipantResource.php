<?php

namespace App\Http\Resources\Api\V1\Group;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowParticipantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'participant' => $this->participants->map(function ($participant) {
                return [
                    'id' => $participant->user->id,
                    'name' => $participant->user->profile->name,
                    'role' => $participant->role,
                    'avatar' => $participant->user->profile->avatar->file_url ?? null,
                ];
            })
        ];

    }
}
