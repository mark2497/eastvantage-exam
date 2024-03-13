<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Role;

class ValidRoles implements Rule
{

    public function passes($attribute, $value)
    {
        // Retrieve all roles from the roles table
        $existingRoles = Role::pluck('role')->toArray();

        if (gettype($value) == "string") {
            dd($existingRoles);
        }
        // Check if each role in $value exists in $existingRoles
        foreach ($value as $role) {
            if (!in_array($role, $existingRoles)) {
                return false;
            }
        }

        return true;
    }

    public function message()
    {
        return 'One or more selected roles are invalid.';
    }
}
