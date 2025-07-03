<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'bio',
        'link',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function avatar(): MorphOne
    {
        return $this->morphOne(File::class, 'related');
    }
}
