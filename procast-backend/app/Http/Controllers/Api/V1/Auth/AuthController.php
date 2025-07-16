<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class AuthController extends BaseController
{
    /**
     * Register User
     *
     * @param RegisterRequest $request
     *
     * @return JsonResponse
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = User::query()->create($request->all());

        return $this->sendResponse($user, 'User Registered Successfully.');
    }

    /**
     * Get a Token via given credentials.
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials, true)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $request->session()->regenerate();

        return response()->json(['message' => 'Logged in successfully']);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out']);
    }


    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return array
     */
    protected function respondWithToken($token): array
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
        ];
    }
}

