<?php

namespace App\Http\Controllers\Api\V1\Meeting;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Meeting\UpSerMeetingRequest;
use App\Http\Resources\Api\V1\Meeting\IndexResource;
use App\Http\Resources\Api\V1\Meeting\ShowResource;
use App\Models\Group;
use App\Models\Meeting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class MeetingController extends BaseController
{
    public function index(Group $group): AnonymousResourceCollection
    {
        $meetings = $group
            ->meetings()
            ->newQuery()
            ->orderBy('date', 'desc')
            ->get();

        return IndexResource::collection($meetings);
    }

    public function store(UpSerMeetingRequest $request, Group $group): JsonResponse
    {
        $meeting = $group
            ->meetings()
            ->create($request->validated());

        return response()->json($meeting);
    }

    public function show(Group $group, Meeting $meeting): ShowResource
    {
        $meeting->load('user.profile.avatar');

        return ShowResource::make($meeting);
    }

    public function update(UpSerMeetingRequest $request, Group $group, Meeting $meeting)
    {
        $meeting->update($request->validated());

        return response()->json($meeting);
    }

    public function join(Group $group, Meeting $meeting)
    {
        $userId = Auth::id();

        if (!$meeting->user()->where('user_id', $userId)->exists()) {
            $meeting->user()->attach($userId);

            return $this->sendResponse([], 'Joined successfully.');
        }

        return $this->sendResponse([], 'Already joined');
    }

    public function destroy(Group $group, Meeting $meeting)
    {
        $meeting->delete();

        return $this->sendResponse([], 'Deleted successfully.');
    }
}
