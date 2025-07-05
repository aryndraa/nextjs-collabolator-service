<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
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
                            Route::post('make-profile', 'makeProfile')->name('make-profile');
                        });
                });


    });
