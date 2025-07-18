<?php

namespace App\Models;

use App\Policies\MessagePolicy;
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;

#[UsePolicy(MessagePolicy::class)]
class Message extends Model
{
    protected $fillable = [
        'type',
        'user_id',
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

    public function file(): MorphOne
    {
        return $this->morphOne(File::class, 'related');
    }
}
