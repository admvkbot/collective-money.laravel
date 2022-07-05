<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;


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


Route::get('/', function () {
   return view('welcome');
});

Route::get('/clear', function () {
   $exitCode = Artisan::call('config:cache');
   $exitCode = Artisan::call('config:clear');
   $exitCode = Artisan::call('cache:clear');
   $exitCode = Artisan::call('view:clear');
   $exitCode = Artisan::call('route:clear');
   $exitCode = Artisan::call('clear-compiled');
   return 'DONE'; 
});


Auth::routes();

Route::get('{page}', 'MainController')->where('page', '^(?!storage).*$');

Route::get('/greeting', function () {
   return 'Hello World';
})->name('welcome');
