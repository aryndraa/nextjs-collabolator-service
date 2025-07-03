<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assignment extends Model
{
    protected $fillable = [
        'title',
        'description',
        'completed',
        'deadline',
    ];

    public function group(): belongsTo
    {
        return $this->belongsTo(Group::class);
    }

    public function participants(): HasMany
    {
        return $this->hasMany(AssignmentParticipant::class);
    }
}
