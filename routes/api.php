<?php

use App\Http\Controllers\API\IndexController;
//use App\Http\Controllers\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/get', 'GetController');
    Route::get('/userdata', 'UserDataController');
    Route::get('/get-accounts', [IndexController::class, 'getAllAccounts']);
    Route::get('/get-account-data/{id}', [IndexController::class, 'getAccountData']);
    Route::get('/get-social-networks/{id}', [IndexController::class, 'getSocialNetworks']);
    Route::get('/get-socials', [IndexController::class, 'getAllSocials']);
    Route::post('/get-referers', [IndexController::class, 'getReferers']);
    Route::post('/get-messages', [IndexController::class, 'getMessages']);
    Route::get('/get-my', 'My\IndexController');
    Route::post('/add-account', 'Account\CreateController');
    Route::post('/add-social', 'Social\CreateController');
    Route::post('/edit-social', 'Social\EditController');
    Route::post('/get-projects/{id}', 'Project\IndexController');
 });
//Route::get('/get', 'GetController');
//Route::get('/get-accounts', [IndexController::class, 'getAllAccounts']);