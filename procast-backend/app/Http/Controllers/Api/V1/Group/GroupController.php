<?php

namespace App\Http\Controllers\Api\V1\Group;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Group\ParticipantRequest;
use App\Http\Requests\Api\V1\Group\UpSerGroupRequest;
use App\Http\Resources\Api\V1\Group\ShowParticipantResource;
use App\Http\Resources\Api\V1\Group\ShowResource;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class GroupController extends BaseController
{
    /**
     * Show user group
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $userId = Auth::id();
        $groups = Group::query()
            ->whereHas('participants', function ($query) use ($userId) {
                return $query->where('user_id', $userId);
            })->get();

        return response()->json($groups);
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

            return $this->sendResponse($group, 'Group updated successfully.');
        }

        return $this->sendError('Only admin can update group.');
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

        $group->load([
            'participants' => function ($query) use ($search) {
                $query->whereHas('user.profile', function ($q) use ($search) {
                    if ($search) {
                        $q->where('name', 'like', '%' . $search . '%');
                    }
                })->with([
                    'user.profile.avatar'
                ]);
            }
        ]);

        return ShowParticipantResource::make($group);
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

            return $this->sendResponse([], 'Participant deleted successfully.');
        }

        return $this->sendError('Only admin can delete participant.');
    }
}
