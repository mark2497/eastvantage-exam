<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\RegisterRequest;

class UserController extends Controller
{
    public function register(RegisterRequest $request) {
        try {
            dd($request('fullName'));
            DB::beginTransaction();
                $userId = User::insertGetId([
                    'fullname' => $request('fullName'),
                    'email' => request()
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            Log::error($e->getMessage());
        }
    }
}
