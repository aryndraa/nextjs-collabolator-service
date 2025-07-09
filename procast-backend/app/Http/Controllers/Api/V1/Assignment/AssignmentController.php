<?php

namespace App\Http\Controllers\Api\V1\Assignment;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Assignment\UpSerAssignmentRequest;
use App\Http\Resources\Api\V1\Assignment\IndexResource;
use App\Http\Resources\Api\V1\Assignment\ShowResource;
use App\Models\Assignment;
use App\Models\Group;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AssignmentController extends BaseController
{
    public function index(Group $group): AnonymousResourceCollection
    {
        $assignment = $group
            ->assignments()
            ->with('users.profile.avatar')
            ->get();


        return IndexResource::collection($assignment);
    }

    public function store(UpSerAssignmentRequest $request, Group $group)
    {
        $assignment = Assignment::query()->make($request->all());
        $group->assignments()->save($assignment);

        $assignment->users()->attach($request->user());

        return $this->sendResponse($assignment, 'Assignment created successfully.');
    }

    public function show(Group $group, Assignment $assignment)
    {
        $assignment->load('users.profile.avatar');

        return ShowResource::make($assignment);
    }
}
