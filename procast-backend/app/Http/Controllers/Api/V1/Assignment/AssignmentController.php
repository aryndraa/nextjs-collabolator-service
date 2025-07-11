<?php

namespace App\Http\Controllers\Api\V1\Assignment;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Requests\Api\V1\Assignment\UpSerAssignmentRequest;
use App\Http\Resources\Api\V1\Assignment\IndexResource;
use App\Http\Resources\Api\V1\Assignment\ShowResource;
use App\Models\Assignment;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Gate;

class AssignmentController extends BaseController
{
    /**
     * Show all assignments in group
     *
     * @param Group $group
     * @return AnonymousResourceCollection
     */
    public function index(Group $group): AnonymousResourceCollection
    {
        $assignment = $group
            ->assignments()
            ->with('users.profile.avatar')
            ->get();


        return IndexResource::collection($assignment);
    }

    /**
     * Store assignment to group
     *
     * @param UpSerAssignmentRequest $request
     * @param Group $group
     * @return JsonResponse
     */
    public function store(UpSerAssignmentRequest $request, Group $group): JsonResponse
    {
        Gate::authorize('isAdmin', $group);

        $assignment = Assignment::query()->make($request->all());
        $group->assignments()->save($assignment);

        if($request->has('users_id')) {
            $users = $request->get('users_id');

            foreach ($users as $user) {
                $assigned = $assignment->users()->where('user_id', $users)->exists();

                if(!$assigned) {
                    $assignment->users()->attach($user);
                }
            }
        }

        return $this->sendResponse($assignment, 'Assignment created successfully.');
    }

    /**
     * show detail assigment
     *
     * @param Group $group
     * @param Assignment $assignment
     * @return ShowResource
     */
    public function show(Group $group, Assignment $assignment): ShowResource
    {
        $assignment->load('users.profile.avatar');

        return ShowResource::make($assignment);
    }

    /**
     * Update detail assignment
     *
     * @param UpSerAssignmentRequest $request
     * @param Group $group
     * @param Assignment $assignment
     * @return JsonResponse
     */
    public function update(UpSerAssignmentRequest $request, Group $group, Assignment $assignment)
    {
        Gate::authorize('isAdmin', $group);

        $assignment->update($request->all());

        if($request->has('users_id')) {
            $users = $request->get('users_id');

            foreach ($users as $user) {
                $assigned = $assignment->users()->where('user_id', $users)->exists();

                if(!$assigned) {
                    $assignment->users()->attach($user);
                }
            }
        }

        return $this->sendResponse($assignment, 'Assignment updated successfully.');
    }

    /**
     * destroy assignment
     *
     * @param Group $group
     * @param Assignment $assignment
     * @return JsonResponse
     */
    public function destroy(Group $group, Assignment $assignment)
    {
        Gate::authorize('isAdmin', $group);

        $assignment->delete();

        return $this->sendResponse($assignment, 'Assignment deleted successfully.');
    }

    /**
     * For user to completing the assignment
     *
     * @param Group $group
     * @param Assignment $assignment
     * @return JsonResponse
     */
    public function completing(Group $group, Assignment $assignment)
    {
        Gate::authorize('canCompleting', [$group, $assignment]);

        $assignment->update(['completed' => true]);

        return $this->sendResponse($assignment, 'Assignment completed successfully.');
    }
}
