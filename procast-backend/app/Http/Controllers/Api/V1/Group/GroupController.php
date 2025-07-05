<?php

namespace App\Http\Controllers\Api\V1\Group;

use App\Http\Controllers\Api\V1\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Group\UpSerGroupRequest;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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

        $admin = $group->participants()->create([
            'user_id' => $userId,
            'role'    => 'admin'
        ]);
        
        return $this->sendResponse($group, 'Group created successfully.');
    }
}
