<?php

namespace App\Http\Resources\Api\V1\Meeting;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'title'        => $this->title,
            'date'         => $this->date,
            'url'          => $this->url,
            'participants' => $this->users->map(function ($user) {
                return [
                    'id'     => $user->id,
                    'name'   => $user->profile->name,
                    'avatar' => $user->profile->avatar->file_url,
                ] ?? null;
            }) ?? null
        ];
    }
}
