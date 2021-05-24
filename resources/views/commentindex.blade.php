@extends('layout.master')

@section('konten')

<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>List Comment</h1>                       
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
	<div class="col-md-12">
	  <div class="box">
		
		<div class="box-body">
		  <table class="table table-bordered">
			<tr>
			  <th style="width: 10px">#</th>			  
			  <th>Contents</th>
			  <th>Name</th>
			  <th>Email</th>
			  <th>RegDate</th>
			<th >Action</th>			
			</tr>
			
			@foreach($result_data as $key=>$row)
			<tr>
			  <td>{{$key+1}}</td>
			  <td>{{$row->Contents}}</td>
			  <td>{{$row->Name}}</td>
			   <td>{{$row->Email}}</td>
			   <td>{{$row->RegDate}}</td>
			  <td width="100"><a href="{{url('/')}}/commentadmin/delete/{{ $row->ID }}" class="btn btn-block btn-danger">Delete</a></td>
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