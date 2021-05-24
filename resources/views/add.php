@extends('layout.master')

@section('konten')

<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>List Blog</h1>                       
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
	<div class="col-md-12">
	  <div class="box">
		<a href="/blogadmin/add" class="btn btn-primary">Add New</a>
		<div class="box-body">
		  <table class="table table-bordered">
			<tr>
			  <th style="width: 10px">#</th>
			  <th>ID</th>
			  <th>Title</th>
			  <th>RegDate</th>
			<th colspan="2" >Action</th>			
			</tr>
			
			@foreach($result_data as $key=>$row)
			<tr>
			  <td>1.</td>
			  <td>{{$row->Title}}</td>
			  <td>{{$row->RegDate}}</td>
			  <td width="100"><a href="/blogadmin/edit/{{ $row->ID }}" class="btn btn-block btn-primary">Edit</a></td>
			  <td width="100"><a href="/blogadmin/delete/{{ $row->ID }}" class="btn btn-block btn-danger">Delete</a></td>
			</tr>
			@endforeach
			
			
		
		  </table>
		  <style type="text/css">
				.pagination li{
					float: left;
					list-style-type: none;
					margin:5px;
				}
			</style>

				<br/>
			Halaman : {{ $result_data->currentPage() }} <br/>
			Jumlah Data : {{ $result_data->total() }} <br/>
			Data Per Halaman : {{ $result_data->perPage() }} <br/>	 
		 	{{ $result_data->links() }}
		</div><!-- /.box-body -->
	   
	  </div><!-- /.box -->

	</div><!-- /.col -->

  </div><!-- /.row -->

</section><!-- /.content -->

@endsection