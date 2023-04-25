<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
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
            'name'               => 'required',
            'father_name'        => 'required',
            'gender'             => 'required',
            'phone'              => 'regex:/^(07)[0-9]{8}$/',
            'image'              => 'required|mimes:jpeg,bmp,jpg,png|max:2000',
        ];
    }

     /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {

       return [
           'name.required'               => "Name Feild is Required!",
           'father_name.required'        => "Father Name Feild is Required!",
           'gender.required'             => "Please Select The Gender!",
           'phone.regex'                 => "Entered Phone is Wrong!",
           'phone.required'              => "Phone Number Feild is Required!",
           'image.required'              => "Please Select Your Image!",
           'image.mimes'                 => "Image Must Be (JGP,PNG,JPEG)!",
       ];
    }
}