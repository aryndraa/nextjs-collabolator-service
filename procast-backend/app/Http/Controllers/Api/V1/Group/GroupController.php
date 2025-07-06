<?php

namespace App\Http\Controllers\Api\V1\Group;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Group\AddParticipantRequest;
use App\Http\Requests\Api\V1\Group\UpSerGroupRequest;
use App\Http\Resources\Api\V1\Group\ShowParticipantResource;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class GroupController extends BaseController
{
    public function index(): JsonResponse
    {
        $userId = Auth::id();
        $groups = Group::query()
            ->whereHas('participants', function ($query) use ($userId) {
                return $query->where('user_id', $userId);
            })->get();

        return response()->json($groups);
    }

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

    public function update(UpSerGroupRequest $request, Group $group): JsonResponse
    {
        $userId = Auth::id();
        $isAdmin = $group->participants()
            ->where('user_id', $userId)
            ->where('role', 'admin')
            ->exists();

        if ($isAdmin) {
            $group->update($request->all());

            return $this->sendResponse($group, 'Group updated successfully.');
        }

        return $this->sendError('Only admin can update group.');
    }

    public function addParticipant( AddParticipantRequest $request, Group $group): JsonResponse
    {
        $userId = Auth::id();
        $isAdmin = $group->participants()
            ->where('user_id', $userId)
            ->where('role', 'admin')
            ->exists();

        if ($isAdmin) {
            $participant =  $group->participants()->create([
                'user_id' => $request->get('user_id'),
                'group_id' => $group,
                'role' => 'member'
            ]);

            return $this->sendResponse($participant, 'Group added successfully.');
        }

        return $this->sendError('Only admin can add participant.');
    }

    public function showParticipants(Group $group)
    {
        $group->load('participants.user.profile.avatar');

        return ShowParticipantResource::make($group);
    }

}
