<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Auth\ProfileRequest;
use App\Http\Requests\Api\V1\Auth\RegisterRequest;
use App\Models\File;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    /**
     * Register User
     *
     * @param RegisterRequest $request
     * @return JsonResponse
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = User::query()->create($request->all());

        if (! $token = auth()->attempt($request->only('email', 'password'))) {
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }

        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'User Registered Successfully.');
    }

    /**
     * @param ProfileRequest $request
     *
     * @return JsonResponse
     */
    public function makeProfile(ProfileRequest $request): JsonResponse
    {
        $userId = Auth::id();

        $profile = Profile::query()
            ->make($request->all());

        $profile->user()->associate($userId);
        $profile->save();

        if($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');

            File::uploadFile($avatar, $profile, 'avatar', 'user/avatars');
        }

        return $this->sendResponse($profile, 'Profile Updated Successfully.');
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
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
    }
}

