<?php

namespace App\Http\Requests\Api\V1\Message;

use Illuminate\Foundation\Http\FormRequest;

class UpSerMessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "text"     => 'nullable|string',
            'type'     => 'nullable|string',
            'file'     => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,pdf',
            'reply_to' => 'nullable|integer|exists:messages,id',
        ];
    }
}
