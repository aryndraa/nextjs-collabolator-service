<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
use App\Http\Controllers\Api\V1\Group\GroupController;
use App\Http\Controllers\Api\V1\Message\MessageController;
use App\Http\Controllers\Api\V1\Profile\ProfileController;
use Illuminate\Support\Facades\Route;

Route::prefix('')
    ->group(function () {
        Route::prefix('auth')
                ->controller(AuthController::class)
                ->group(function () {
                    Route::post('register', 'register')->name('register');
                    Route::post('login', 'login')->name('login');
                    Route::middleware('auth:api')
                        ->group(function () {
                            Route::delete('logout', 'logout')->name('logout');
                        });
                });

        Route::middleware('auth:api')
            ->group(function () {
                Route::controller(ProfileController::class)
                    ->prefix('profile')
                    ->group(function () {
                        Route::get('', 'show')->name('show');
                        Route::post('', 'store')->name('store');
                        Route::put('', 'update')->name('update');
                    });

                Route::controller(GroupController::class)
                    ->prefix('group')
                    ->group(function () {
                        Route::get('', 'index')->name('index');
                        Route::post('', 'store')->name('store');
                        Route::get('/{group}', 'show')->name('show');
                        Route::put('/{group}', 'update')->name('update');
                        Route::delete('/{group}', 'destroy')->name('destroy');
                        Route::prefix('{group}')
                            ->group(function () {
                                Route::post('/participant', 'addParticipant')->name('addParticipant');
                                Route::get('/participant', 'showParticipants')->name('showParticipants');
                                Route::delete('/participant', 'deleteParticipant')->name('deleteParticipant');

                                Route::controller(MessageController::class)
                                    ->prefix('message')
                                    ->group(function () {
                                        Route::get('', 'index')->name('index');
                                        Route::post('', 'store')->name('store');
                                        Route::patch('{message}', 'update')->name('update');
                                        Route::delete('{message}', 'destroy')->name('destroy');
                                        Route::get('/pin', 'pinMessages')->name('pinMessages');
                                        Route::post('{message}/pin', 'pin')->name('pin');
                                    });
                            });
                    });
            });
    });
