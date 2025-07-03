<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class File extends Model
{
    protected $fillable = [
        "file_type",
        "file_size",
        "file_path",
        "file_name",
        "related_id",
        "related_type",
    ];

    public function file(): MorphTo
    {
        return $this->morphTo('related');
    }
}
