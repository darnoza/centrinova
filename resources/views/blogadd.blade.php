@extends('layout.master')

@section('konten')

<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>Add Blog</h1>                       
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

			<!-- form start -->
			<form action="<?php echo url('/');?>/blogadmin/addProcess" method="post" enctype="multipart/form-data">
			{{ csrf_field() }}
			  <div class="box-body">
				<div class="form-group">
				  <label for="exampleInputEmail1">Title</label>
				  <input type="text" name="Title" class="form-control" id="exampleInputEmail1" placeholder="Title">
				</div>
				<!-- textarea -->
				<div class="form-group">
				  <label>Contents</label>
				  <textarea name="Contents" class="form-control" rows="3" placeholder="Contents ..."></textarea>
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
		  </div><!-- /.box -->



	</div><!-- /.col -->

  </div><!-- /.row -->

</section><!-- /.content -->

@endsection