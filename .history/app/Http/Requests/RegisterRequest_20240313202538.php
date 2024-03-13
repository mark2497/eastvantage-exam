<?php

namespace App\Http\Requests;

use App\Rules\ValidRoles;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
        return [
            'fullName' => 'string|max:255|required',
            'email' => 'email|unique:users|required',
            'checkedRoles' => [new ValidRoles, 'required', 'array']
        ];
    }
}
