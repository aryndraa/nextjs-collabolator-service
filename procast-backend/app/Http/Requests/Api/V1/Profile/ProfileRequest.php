<?php

namespace App\Http\Requests\Api\V1\Profile;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            'name'   => ['required', 'string'],
            'bio'    => ['nullable', 'string'],
            'link'   => ['nullable', 'string'],
            'avatar' => ['nullable', 'file', 'mimes:jpeg,jpg,png', 'max:2048'],
        ];
    }
}
