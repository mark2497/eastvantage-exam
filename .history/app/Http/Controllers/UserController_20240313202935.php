<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;

class UserController extends Controller
{
    public function register(RegisterRequest $request) {
        [$fullname, $email] = $request->validated();
        dd($fullname, $email);
    }
}
