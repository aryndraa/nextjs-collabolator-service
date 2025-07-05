<?php

namespace App\Http\Controllers\Api\V1\Profile;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Profile\ProfileRequest;
use App\Http\Resources\Api\V1\Profile\ShowProfile;
use App\Models\File;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class ProfileController extends BaseController
{
    /**
     * Show user profile
     *
     * @return ShowProfile
     */
    public function show(): ShowProfile
    {
        $userId = Auth::id();
        $cacheKey = "user-profile:$userId";

        if (Cache::has($cacheKey)) {
            $profile = Cache::get($cacheKey);

            return ShowProfile::make($profile);
        }

        $profile = User::query()
            ->select('id', 'email')
            ->with([
                'profile' => fn ($query) => $query->select('id', 'user_id', 'name', 'bio', 'link') ,
                'profile.avatar' => fn ($query) => $query->select('related_id', 'file_path') ,
            ])
            ->findOrFail($userId);

        Cache::put($cacheKey, $profile, now()->addMinutes(60));

        return ShowProfile::make($profile);
    }

    /**
     * Create user profile
     *
     * @param ProfileRequest $request
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

    /**
     * Update user profile
     *
     * @param ProfileRequest $request
     * @return JsonResponse
     */
    public function update(ProfileRequest $request): JsonResponse
    {
        $userId = Auth::id();
        $user   = User::query()->findOrFail($userId);

        $user->profile()->update($request->all());

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');

            if($user->profile->avatar) {
                Storage::disk('public')->delete($user->profile->avatar->file_path);
                $user->profile->avatar->delete();
            }

            File::uploadFile($avatar, $user->profile, 'avatar', 'user/avatars');
        }

        return $this->sendResponse($user->profile, 'Profile Updated Successfully.');
    }
}
