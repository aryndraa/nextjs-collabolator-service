<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Message extends Model
{
    protected $fillable = [
        'type',
        'text',
    ];

    public function user(): belongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function recipient(): hasOne
    {
        return $this->hasOne(MessageRecipient::class);
    }

    public function recipientReply(): hasOne
    {
        return $this->hasOne(MessageRecipient::class);
    }
}
