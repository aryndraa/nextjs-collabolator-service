<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
use App\Http\Controllers\Api\V1\Profile\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('')
    ->group(function () {
        Route::prefix('auth')
                ->controller(AuthController::class)
                ->group(function () {
                    Route::post('register', 'register')->name('register');
                    Route::post('login', 'login')->name('login');
                    Route::middleware('api')
                        ->group(function () {
                            Route::delete('logout', 'logout')->name('logout');
                        });
                });

        Route::middleware('api')
            ->group(function () {
                Route::controller(ProfileController::class)
                    ->prefix('profile')
                    ->group(function () {
                        Route::get('', 'index')->name('index');
                        Route::post('', 'store')->name('store');
                    });
            });
    });
