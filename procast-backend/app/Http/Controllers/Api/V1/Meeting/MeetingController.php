<?php

namespace App\Http\Controllers\Api\V1\Meeting;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Meeting\UpSerMeetingRequest;
use App\Models\Group;
use Illuminate\Http\Request;

class MeetingController extends Controller
{
    public function index(Group $group)
    {
        $meetings = $group
            ->meetings()
            ->get();

        return response()->json($meetings);
    }

    public function store(UpSerMeetingRequest $request, Group $group)
    {
        $meeting = $group
            ->meetings()
            ->create($request->validated());

        return response()->json($meeting);
    }
}
