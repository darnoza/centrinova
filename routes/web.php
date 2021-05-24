<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BlogController;
use App\Http\Controllers\BlogadminController;
use App\Http\Controllers\CommentadminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('blog', [BlogController::class, 'index']);
Route::get('blog/detail/{id}', [BlogController::class, 'detail']);
Route::post('blog/comment', [BlogController::class, 'Comment']);


// ADMIN 
Route::get('blogadmin', [BlogadminController::class, 'index']);
Route::get('blogadmin/add', [BlogadminController::class, 'add']);
Route::post('blogadmin/addProcess', [BlogadminController::class, 'addProcess']);
Route::get('blogadmin/edit/{id}', [BlogadminController::class, 'edit']);
Route::post('blogadmin/editProcess', [BlogadminController::class, 'editProcess']);
Route::get('blogadmin/delete/{id}', [BlogadminController::class, 'delete']);

Route::get('commentadmin', [CommentadminController::class, 'index']);
Route::get('commentadmin/delete/{id}', [CommentadminController::class, 'delete']);
