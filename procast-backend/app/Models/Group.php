<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Group extends Model
{
    protected $fillable = [
        'name',
        'description',
        'deadline_project',
    ];

    public function isAdminUser($userId = null): bool
    {
        $userId = $userId ?? Auth::id();

        return $this->participants()
            ->where('user_id', $userId)
            ->where('role', 'admin')
            ->exists();
    }

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

    public function meetings(): HasMany
    {
        return $this->hasMany(Meeting::class);
    }
}
