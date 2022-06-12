<?php

use App\Http\Controllers\API\ApiController;
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

Route::group(['middleware' => 'auth:sanctum'], function () {
   Route::get('/get', 'GetController');
   Route::get('/userdata', 'UserDataController');
   Route::get('/get-accounts', [ApiController::class, 'getAllAccounts']);
   Route::get('/get-account-data/{id}', [ApiController::class, 'getAccountData']);
   Route::get('/get-social-networks/{id}', [ApiController::class, 'getSocialNetworks']);
   Route::get('/get-socials', [ApiController::class, 'getAllSocials']);
   Route::post('/get-referers', [ApiController::class, 'getReferers']);
   Route::post('/get-messages', [ApiController::class, 'getMessages']);
   Route::post('/get-messages-moderate', [ApiController::class, 'getMessagesModerate']);
   Route::get('/get-types', [ApiController::class, 'getProjectTypes']);
   Route::get('/get-blocks/{id}', 'ProjectBlock\IndexController');
   Route::post('/add-block', 'ProjectBlock\CreateController');
   Route::get('/delete-block/{id}', 'ProjectBlock\DeleteController');
   Route::post('/edit-block/{id}', 'ProjectBlock\EditController');
   Route::get('/get-my', 'My\IndexController');
   Route::post('/add-account', 'Account\CreateController');
   Route::post('/add-social', 'Social\CreateController');
   Route::post('/edit-social', 'Social\EditController');
   Route::post('/get-projects/{id}', 'Project\IndexController');
   Route::get('/get-project/{id}', 'Project\ProjectController');
   Route::post('/edit-project/{project_id}', 'Project\EditController');
   Route::post('/add-project', 'Project\CreateController');
   Route::get('/get-indexes/{project_id}', [ApiController::class, 'getIndexesByProjectId']);
});
