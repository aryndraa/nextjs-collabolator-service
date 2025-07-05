<?php

namespace App\Http\Controllers\Api\V1\Group;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GroupController extends Controller
{
    public function index()
    {
        $userId = Auth::id();
        $groups = Group::query()->whereHas('participants', function ($query) use ($userId) {
            return $query->where('user_id', $userId);
        })->get();

        return response()->json($groups);
    }
}
