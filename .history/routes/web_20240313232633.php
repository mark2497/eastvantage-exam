<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('index');
});
Route::get("/users", [UserController::class, 'index']);
Route::post('/new', [UserController::class, 'register']);
Route::get('/details/{id}', [UserController::class, 'getDetails'])->whereNumber(["id"]);
Route::delete('delete/{id}', [UserController::class, 'remoteUser'])->whereNumber(["id"]);
