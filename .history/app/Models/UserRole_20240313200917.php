<?php

namespace App\Models;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserRole extends Model
{
    use HasFactory;

    public function role() : BelongsTo {
        return $this->belongsTo(Role::class);
    }

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }

}
