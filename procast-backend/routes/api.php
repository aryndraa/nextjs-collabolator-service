<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('')
    ->group(function () {
        Route::prefix('auth')
                ->group(function () {
                    Route::post('register', [AuthController::class, 'register']);
                });
    });
