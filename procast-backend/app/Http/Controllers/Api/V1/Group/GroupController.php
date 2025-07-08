<?php

namespace App\Http\Controllers\Api\V1\Group;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Group\ParticipantRequest;
use App\Http\Requests\Api\V1\Group\UpSerGroupRequest;
use App\Http\Resources\Api\V1\Group\IndexResource;
use App\Http\Resources\Api\V1\Group\ShowParticipantResource;
use App\Http\Resources\Api\V1\Group\ShowResource;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;

class GroupController extends BaseController
{
    /**
     * Show user group
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        $userId = Auth::id();

        $groups = Cache::remember("user:{$userId}:groups", now()->addMinutes(5), function () use ($userId) {
            return Group::query()
                ->whereHas('participants', function ($query) use ($userId) {
                    $query->where('user_id', $userId);
                })
                ->with('latestMessageRecipient.message.user.profile')
                ->get();
        });

        return IndexResource::collection($groups);
    }

    /**
     * Show group info
     *
     * @param Group $group
     * @return ShowResource
     */
    public function show(Group $group): ShowResource
    {
        Gate::authorize('view', $group);

        return ShowResource::make($group);
    }


    /**
     * Store group data
     *
     * @param UpSerGroupRequest $request
     * @return JsonResponse
     */
    public function store(UpSerGroupRequest $request): JsonResponse
    {
        $userId = Auth::id();
        $group = Group::query()->create($request->all());

        $group->participants()->create([
            'user_id' => $userId,
            'role'    => 'admin'
        ]);

        Cache::forget("user:{$userId}:groups");


        return $this->sendResponse($group, 'Group created successfully.');
    }

    /**
     * Update group data
     *
     * @param UpSerGroupRequest $request
     * @param Group $group
     * @return JsonResponse
     */
    public function update(UpSerGroupRequest $request, Group $group): JsonResponse
    {
        $userId = Auth::id();

        if ($group->isAdminUser($userId)) {
            $group->update($request->all());
            Cache::forget("user:{$userId}:groups");

            return $this->sendResponse($group, 'Group updated successfully.');
        }

        return $this->sendError('Only admin can update group.');
    }

    public function destroy(Group $group): JsonResponse
    {
        $userId = Auth::id();

        if ($group->isAdminUser($userId)) {
            $group->delete();
            Cache::forget("user:{$userId}:groups");
        }

        return $this->sendResponse([], 'Group deleted successfully.');
    }

    /**
     * Add participant to group
     *
     * @param ParticipantRequest $request
     * @param Group $group
     * @return JsonResponse
     */
    public function addParticipant(ParticipantRequest $request, Group $group): JsonResponse
    {
        Gate::authorize('view', $group);

        $userId = Auth::id();

        if ($group->isAdminUser($userId)) {
            $participant =  $group->participants()->create([
                'user_id' => $request->get('user_id'),
                'group_id' => $group,
                'role' => 'member'
            ]);

            Cache::forget("group:{$group->id}:participants:search:all");

            return $this->sendResponse($participant, 'Participant added successfully.');
        }

        return $this->sendError('Only admin can add participant.');
    }

    /**
     * Show all participants in group
     *
     * @param Group $group
     * @param Request $request
     * @return ShowParticipantResource
     */
    public function showParticipants(Group $group, Request $request): ShowParticipantResource
    {
        Gate::authorize('view', $group);

        $search = $request->get('search');

        $participants = $group->load([
                'participants' => function ($query) use ($search) {
                    $query->whereHas('user.profile', function ($q) use ($search) {
                        if ($search) {
                            $q->where('name', 'like', '%' . $search . '%');
                        }
                    })->with('user.profile.avatar');
                }
            ]);

        return ShowParticipantResource::make($participants);
    }

    /**
     * Delete Participant
     *
     * @param ParticipantRequest $request
     * @param Group $group
     * @return JsonResponse
     */
    public function deleteParticipant(ParticipantRequest $request, Group $group)
    {
        $userId = Auth::id();

        if($group->isAdminUser($userId)) {
            $group->participants()
                ->where('user_id', $request->get('user_id'))
                ->delete();

            Cache::forget("group:{$group->id}:participants:search:all");

            return $this->sendResponse([], 'Participant deleted successfully.');
        }

        return $this->sendError('Only admin can delete participant.');
    }
}
