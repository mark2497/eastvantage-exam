<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UserDetailsRequest;
use App\Http\Requests\UserListRequest;
use App\Models\UserRole;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(UserListRequest $request) : LengthAwarePaginator {
        $usersByRole = User::with('roles')->paginate($request->get('size'))->forPage($request->get('page'));
        return $usersByRole;
    }

    public function register(RegisterRequest $request) : JsonResponse {
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
            return response()->json(['message' => "Successfully registered!"], 200);
        } catch (Exception $e) {
            return response()->json(['message' => "Something went wrong!"], 500);
            DB::rollback();
            Log::error($e->getMessage());
        }
    }

    public function getDetails(User $user, UserDetailsRequest $request) {
        dd($user);
    }

    public function removeUser(User $user, UserDetailsRequest $request) {
        dd($user);
    }
}
