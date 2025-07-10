<?php

namespace App\Http\Controllers\Api\V1\Assignment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Assignment\UpSerAssignmentRequest;
use App\Models\Assignment;
use App\Models\Group;
use Illuminate\Http\Request;

class AssignmentController extends Controller
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

        $assignment->participants()->


    }
}
