@extends('layout.master')

@section('konten')

<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>Edit Blog</h1>                       
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
	<div class="col-md-12">


		 <!-- general form elements -->
		  <div class="box box-primary">
			<div class="box-header with-border">
			  <h3 class="box-title"></h3>
			</div><!-- /.box-header -->
			
			@if (count($errors) > 0)
				<div class="alert alert-danger">
					<ul>
						 @foreach ($errors->all() as $error)
						  <li>{{ $error }}</li>
						 @endforeach
					</ul>
				</div>
			@endif
			
			@foreach($result_data as $row)
			<!-- form start -->
			<form action="<?php echo url('/');?>/blogadmin/editProcess" method="post" enctype="multipart/form-data">
			<input type="hidden" name="ID" value="{{ $row->ID }}"> <br/>
			{{ csrf_field() }}
			  <div class="box-body">
				<div class="form-group">
				  <label for="exampleInputEmail1">Title</label>
				  <input type="text" name="Title" value="{{ $row->Title }}" class="form-control" id="exampleInputEmail1" placeholder="Title">
				</div>
				<!-- textarea -->
				<div class="form-group">
				  <label>Contents</label>
				  <textarea name="Contents" class="form-control" rows="3" placeholder="Contents ...">
				  {{ $row->Contents }}
				  </textarea>
				</div>
				<div class="form-group">
				  <label for="exampleInputFile">Images</label>
				  <input type="file" name="file" id="exampleInputFile">
				  <p class="help-block">Example block-level help text here.</p>
				</div>
				
			  </div><!-- /.box-body -->

			  <div class="box-footer">
				<button type="submit" class="btn btn-primary">Submit</button>
			  </div>
			</form>
			@endforeach
			
		  </div><!-- /.box -->



	</div><!-- /.col -->

  </div><!-- /.row -->

</section><!-- /.content -->

@endsection