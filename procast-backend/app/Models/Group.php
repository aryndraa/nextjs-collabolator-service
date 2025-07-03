<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
    protected $fillable = [
        'name',
        'description',
        'deadline_project',
    ];

    public function participants(): HasMany
    {
        return $this->hasMany(GroupParticipant::class);
    }

    public function messageRecipients(): HasMany
    {
        return $this->hasMany(MessageRecipient::class);
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(Assignment::class);
    }
}
