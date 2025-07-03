<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Http\UploadedFile;

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

    /**
     * Access file url
     *
     * @return string
     *
     */

    public function getFileUrlAttribute(): string
    {
        if ($this->file_path) {
            return asset('storage/' . $this->file_path);
        }

        return secure_asset(null);
    }

    /**
     * Helper to upload file
     *
     * @param UploadedFile $file
     * @param Model $model
     * @param $relation
     * @param $directory
     *
     * @return void
     */
    public static function uploadFile(UploadedFile $file, Model $model, $relation, $directory): void
    {
        $filePath = $file->store($directory, 'public');
        $fileName = $file->getClientOriginalName();
        $fileType = $file->getMimeType();
        $fileSize = $file->getSize();

        $model->$relation()->create([
            'file_name' => $fileName,
            'file_size' => $fileSize,
            'file_path' => $filePath,
            'file_type' => $fileType,
        ]);
    }

    public function related(): MorphTo
    {
        return $this->morphTo();
    }
}
