<?php

namespace App\Http\Controllers\Students;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Students;
use App\Http\Requests\StudentRequest;
use Illuminate\Support\Facades\session;
use Auth;
use Storage;
class StudentsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    function index(Request $request)
    {
        $data['records']  = Students::select(
                                            'id',
                                            'name',
                                            'father_name',
                                            'phone',
                                            'gender',
                                            'image'
                                        )
                                    ->orderBy('id', 'ASC')
                                    ->paginate(10);
        if ($request->ajax() == 1) 
        {
            return view('students.list_ajax', $data);
        } 
        else 
        {
            return view('students.list', $data);
        }
    }
    public function create()
    {
        return view('students.create');
    }
    public function store(StudentRequest $request)
    {
        if ($request->hasFile('image')) 
        {
            $path   = Storage::disk('attachments')->put('studentImage/' . date('Y') . '/' . date('m'), $request->file('image'));
        } 
        $record                     = new Students;
        $record->name               = $request->name;
        $record->father_name        = $request->father_name;
        $record->gender             = $request->gender;
        $record->phone              = $request->phone;
        $record->image              = $request->hasFile('image') ? $path : '';
        $record->created_by         = Auth::user()->id;
        if ($record->save()) 
        {
           Session()->flash('success', "Student Information Saved Successfully!");
        } 
        else 
        {
            Session()->flash('fail', "Student Information Not Save!");
        }
    }
    public function edit($encId=0)
    {
        $decId      = Decrypt($encId);
        $record     = Students::find($decId);
        return view('students.edit',compact('record'));
    }

    public function update(Request $request,$id=0)
    {
        $this->validate($request,
            [
                'name'                  => 'required',
                'father_name'           => 'required',
                'gender'                => 'required',
                'phone'                 => 'required|regex:/^(07)[0-9]{8}$/',
                'image'                 => 'mimes:jpeg,bmp,jpg,png|max:2000',
            ],
            [
                'name.required'          => "Name Feild is Required!",
                'father_name.required'   => "Father Name Feild is Required!",
                'gender.required'        => "Please Select The Gender!",
                'phone.regex'            => "Phone Number Must be Like This(078XXXXXXX)",
                'phone.required'         => "Phone Number Feild is Required!",
                'image.mimes'            => "Image Must Be (JGP,PNG,JPEG)!",
            ]
         );
        if ($request->hasFile('image')) 
        {
            $path                   = Storage::disk('attachments')->put('studentImage/' . date('Y') . '/' . date('m'), $request->file('image'));
        } 
        $record                     = Students::find($id);
        $record->name               = $request->name;
        $record->father_name        = $request->father_name;
        $record->gender             = $request->gender;
        $record->phone              = $request->phone;
        $record->image              = $request->hasFile('image') ? $path : $record->image ;
        $record->created_by         = Auth::user()->id;
        if ($record->save()) 
        {
           Session()->flash('success', "Student Information Saved Successfully!");
        } 
        else 
        {
            Session()->flash('fail', "Student Information Not Save!");
        }
    }

    function search(Request $request)
    {
        $name                   = trim($request->name);
        $father_name            = trim($request->father_name);
        $gender                 = trim($request->gender);
        if ($name != ''  or $father_name != '' or $gender != '') 
        {
            $data['records']    = Students::select(
                        'id',
                        'name',
                        'father_name',
                        'gender',
                        'phone',
                        'image',
                    )
                ->when(request()->name, function ($query) {
                    $query->where('name', trim(request()->name));
                })
                ->when(request()->father_name, function ($query) {
                    $query->where('father_name', trim(request()->father_name));
                })
                ->when(request()->gender, function ($query) {
                    $query->where('gender', trim(request()->gender));
                })
                ->orderBy('id', 'asc')
                ->paginate(10);
            return view('students.searchList', $data);
        } 
        else 
        {
            $data['records'] = Students::select(
                    'id',
                    'name',
                    'father_name',
                    'phone',
                    'gender',
                    'image',
                )
                ->orderBy('id', 'asc')
                ->paginate(10);
            return view('students.searchList', $data);
        }
    }
}