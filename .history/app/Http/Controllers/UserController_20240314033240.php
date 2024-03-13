<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UserListRequest;
use App\Http\Requests\UserDetailsRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserController extends Controller
{
    public function index(UserListRequest $request) : LengthAwarePaginator {
        $currentPage = $request->get('page');
        $pageSize = $request->get('size');

        $role_id = Role::where('role', $request->get('role'))->pluck( 'id' )->first();

        return User::whereHas('roles', function($role)  use ($role_id) {
                $role->when(request('role'), fn($q) => $q->where('role_id', $role_id), fn($q) => $q);
            })
            ->with('roles')
            ->paginate($pageSize, ['*'], 'page', $currentPage);
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

    public function getDetails(Request $request, User $user) {
        $user = User::find($request->route('id'))->with('roles');
         dd($user);
    }

    public function removeUser(UserDetailsRequest $request, User $user) : JsonResponse {
        $userModel = $user->find($request->get('id'));
        if($userModel->delete()) {
            return response()->json(['message' => "User has been deleted!"], 200);
        }
        return response()->json(['message' => "Failed to delete!"], 500);
    }
}
