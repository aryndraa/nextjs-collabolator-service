<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'email',
        'link',
    ];

    public function avatar(): MorphOne
    {
        return $this->morphOne(File::class, 'related');
    }
}
