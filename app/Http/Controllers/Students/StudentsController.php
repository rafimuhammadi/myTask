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
            $createYear     = date('Y');
            $createMounth   = date('m');
            $path           = Storage::disk('attachments')->put('studentImage/' . $createYear . '/' . $createMounth, $request->file('image'));
        } 
        else 
        {
            $path = '';
        }
        $record                     = new Students;
        $record->name               = $request->name;
        $record->father_name        = $request->father_name;
        $record->gender             = $request->gender;
        $record->phone              = $request->phone;
        $record->image              = $path;
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
}