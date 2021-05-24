<?php
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class BlogadminController extends Controller
{	
	function index()
    {
    	$blog = DB::table('tb_blog')->paginate(10); 
    	return view('blogindex',['result_data' => $blog]);
    }
	
	public function add()
    {
        $data = array(
            "Title" => "Add"
        );
        return view('blogadd', $data);
    }
	
	public function addProcess(Request $request)
    {
		$this->validate($request,[
			'Title' => 'required',
			'Contents' => 'required',
			'file' => 'required|file|image|mimes:jpeg,png,jpg|max:2048',
		]);
		 
		$file = $request->file('file'); 
		$nama_file = time()."_".$file->getClientOriginalName(); 
		$tujuan_upload = 'upload';
		$file->move($tujuan_upload,$nama_file);
 
        DB::table('tb_blog')->insert([
            'Title' => $request->Title,
            'Contents' => $request->Contents,   
			'Images' => $nama_file,
        ]);
        return redirect('/blogadmin');
    }
	
	public function edit($id)
    {
        $blog = DB::table('tb_blog')->where('ID',$id)->get();
        return view('blogedit',['result_data' => $blog]);
    }
	
    public function editProcess(Request $request)
    {
		$this->validate($request,[
			'Title' => 'required',
			'Contents' => 'required'			
		]);
		
		$file = $request->file('file'); 
		$nama_file = time()."_".$file->getClientOriginalName(); 
		$tujuan_upload = 'upload';
		$file->move($tujuan_upload,$nama_file);
		
		DB::table('tb_blog')->where('ID',$request->ID)->update([
            'Title' => $request->Title,
            'Contents' => $request->Contents,
			'Images' => $nama_file,
        ]);
        return redirect('/blogadmin');
    }

    public function delete($id)
    {
        DB::table('tb_blog')->where('ID',$id)->delete();            
        return redirect('/blogadmin');
    }
}