<?php
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class CommentadminController extends Controller
{	
	function index()
    {
    	$blog = DB::table('tb_comments')->paginate(10); 
    	return view('commentindex',['result_data' => $blog]);
    }
	
    public function delete($id)
    {
        DB::table('tb_comments')->where('ID',$id)->delete();            
        return redirect('/commentadmin');
    }
}