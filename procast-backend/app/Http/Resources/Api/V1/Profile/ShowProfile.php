<?php

namespace App\Http\Resources\Api\V1\Profile;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowProfile extends JsonResource
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
            'email' => $this->email,
            'profile' => [
                'name' => $this->profile->name,
                'bio' => $this->profile->bio,
                'link' => $this->profile->link,
                'avatar' => $this->profile->avatar->file_url,
            ]
        ];
    }
}
