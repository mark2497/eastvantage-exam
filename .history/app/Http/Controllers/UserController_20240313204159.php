<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\RegisterRequest;
use App\Models\UserRole;

class UserController extends Controller
{
    public function register(RegisterRequest $request) {
        try {
            DB::beginTransaction();
                $userId = User::insertGetId([
                    'fullname' => $request->get('fullName'),
                    'email' => $request->get('email')
                ]);
                foreach($request->get('checkedRoles') as $roleName) {
                    $role = Role::where('role', $roleName)->first();
                    if (!$role) {
                        throw new Exception("Role doesn't exist!");
                    }
                    UserRole::insert([
                        'user_id' => $userId,
                        'role_id' => $role->id
                    ]);
                }
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e->getMessage());
        }
    }
}
