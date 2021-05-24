<?php
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{	
	protected $module = 'blog';
		
	public function index()
    {
      	$result_data = DB::table('tb_blog')->paginate(10);		
		
		$data = array(
            "title" => "Blog Data",
			"content_id" => "list",
			"module" => $this->module,
			"result_data" => $result_data
        );		     
		return view('blog')->with($data);		
    } 
	
	public function detail($id)
    {
		$result_data = DB::table('tb_blog')->where('ID',$id)->get();
		$result_comments = DB::table('tb_comments')->where('BlogID',$result_data[0]->ID)->get();
		
		$data = array(
            "title" => "Blog Data",
			"content_id" => "list",
			"module" => $this->module,
			'result_data' => $result_data,
			"result_comments" => $result_comments
        );		     
		return view('detail')->with($data);
	}
	
	
	public function comment(Request $request)
	{
		$this->validate($request,[
			'Name' => 'required',
			'Email' => 'required|email',
			'Contents' => 'required',
			'Type' => 'required',
			'BlogID' => 'required'
		]);
		
        DB::table('tb_comments')->insert([
            'Name' => $request->Name,
            'Email' => $request->Email,   
			'Contents' => $request->Contents,
			'Type' => $request->Type,			
			'BlogID' => $request->BlogID
        ]);
        return redirect('/blog/detail/'.$request->BlogID);
	}
	
}