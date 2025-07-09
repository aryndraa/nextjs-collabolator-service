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
    /**
     * Show all meetings in group
     *
     * @param Group $group
     * @return AnonymousResourceCollection
     */
    public function index(Group $group): AnonymousResourceCollection
    {
        $meetings = $group
            ->meetings()
            ->newQuery()
            ->orderBy('date', 'desc')
            ->get();

        return IndexResource::collection($meetings);
    }

    /**
     * Add new meeting to group
     *
     * @param UpSerMeetingRequest $request
     * @param Group $group
     * @return JsonResponse
     */
    public function store(UpSerMeetingRequest $request, Group $group): JsonResponse
    {
        $meeting = $group
            ->meetings()
            ->create($request->validated());

        return response()->json($meeting);
    }

    /**
     * Show detail meeting and participants
     *
     * @param Group $group
     * @param Meeting $meeting
     * @return ShowResource
     */
    public function show(Group $group, Meeting $meeting): ShowResource
    {
        $meeting->load('user.profile.avatar');

        return ShowResource::make($meeting);
    }

    /**
     * Update meeting
     *
     * @param UpSerMeetingRequest $request
     * @param Group $group
     * @param Meeting $meeting
     * @return JsonResponse
     */
    public function update(UpSerMeetingRequest $request, Group $group, Meeting $meeting): JsonResponse
    {
        $meeting->update($request->validated());

        return response()->json($meeting);
    }

    /**
     * joining user to meeting
     *
     * @param Group $group
     * @param Meeting $meeting
     * @return JsonResponse
     */
    public function join(Group $group, Meeting $meeting): JsonResponse
    {
        $userId = Auth::id();

        if (!$meeting->user()->where('user_id', $userId)->exists()) {
            $meeting->users()->attach($userId);

            return $this->sendResponse([], 'Joined successfully.');
        }

        return $this->sendResponse([], 'Already joined');
    }

    /**
     * Delete meeting
     *
     * @param Group $group
     * @param Meeting $meeting
     * @return JsonResponse
     */
    public function destroy(Group $group, Meeting $meeting): JsonResponse
    {
        $meeting->delete();

        return $this->sendResponse([], 'Deleted successfully.');
    }
}
