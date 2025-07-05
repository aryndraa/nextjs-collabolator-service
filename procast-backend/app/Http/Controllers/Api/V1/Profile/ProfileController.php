<?php

namespace App\Http\Controllers\Api\V1\Profile;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Auth\ProfileRequest;
use App\Models\File;
use App\Models\Profile;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ProfileController extends BaseController
{
    public function index(): JsonResponse
    {
        $userId = Auth::id();

        $profile = Profile::query()
            ->where('user_id', $userId)
            ->with('avatar')
            ->first();

        return response()->json($profile);
    }

    /**
     * Make user profile
     *
     * @param ProfileRequest $request
     *
     * @return JsonResponse
     */
    public function store(ProfileRequest $request): JsonResponse
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
}
