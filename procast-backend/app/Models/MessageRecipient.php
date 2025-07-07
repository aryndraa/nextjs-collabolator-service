<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MessageRecipient extends Model
{
    protected $fillable = [
        'group_id',
        'is_read',
        'is_deleted',
        'is_edited',
        'is_pin',
    ];

    public function message(): belongsTo
    {
        return $this->belongsTo(Message::class);
    }

    public function group(): belongsTo
    {
        return $this->belongsTo(Group::class);
    }

    public function replyMessage(): belongsTo
    {
        return $this->belongsTo(Message::class);
    }
}
