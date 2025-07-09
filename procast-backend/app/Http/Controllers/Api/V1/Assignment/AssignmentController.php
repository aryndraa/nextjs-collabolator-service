<?php

namespace App\Http\Controllers\Api\V1\Assignment;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Assignment\UpSerAssignmentRequest;
use App\Models\Assignment;
use App\Models\Group;

class AssignmentController extends BaseController
{
    public function index(Group $group)
    {
        $assignment = $group->assignments()->get();

        return response()->json($assignment);
    }

    public function store(UpSerAssignmentRequest $request, Group $group)
    {
        $assignment = Assignment::query()->make($request->all());
        $group->assignments()->save($assignment);

        $assignment->users()->attach($request->user());

        return $this->sendResponse($assignment, 'Assignment created successfully.');
    }
}
