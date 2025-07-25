<?php

namespace App\Http\Requests\Api\V1\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            "email"                 => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            "password"              => ['required', 'string', 'min:8', 'confirmed'],
            "password_confirmation" => ['required', 'string', 'min:8', 'same:password'],
        ];
    }
}
