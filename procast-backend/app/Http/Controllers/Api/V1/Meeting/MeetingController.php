<?php

namespace App\Http\Controllers\Api\V1\Meeting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Meeting\UpSerMeetingRequest;
use App\Http\Resources\Api\V1\Meeting\IndexResource;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MeetingController extends Controller
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

    public function store(UpSerMeetingRequest $request, Group $group)
    {
        $meeting = $group
            ->meetings()
            ->create($request->validated());

        return response()->json($meeting);
    }
}
