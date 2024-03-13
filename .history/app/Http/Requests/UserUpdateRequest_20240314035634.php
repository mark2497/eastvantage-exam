<?php

namespace App\Http\Requests;

use App\Rules\ValidRoles;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $userId = request()->get('id');
        return [
            'fullName' => 'string|max:255|required',
            'email' => ['email', 'required', Rule::unique('users')->ignore($userId)],
            'checkedRoles' => [new ValidRoles, 'required', 'array']
        ];
    }
}
