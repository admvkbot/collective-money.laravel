<?php

use App\Http\Controllers\API\ApiController;
use App\Http\Controllers\API\UploadController;
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
   Route::post('/get-messages-moderate/{product_id}', [ApiController::class, 'getMessagesModerate']);
   Route::get('/get-types', [ApiController::class, 'getProductTypes']);
   Route::get('/get-blocks/{id}', 'ProductBlock\IndexController');
   Route::post('/add-block', 'ProductBlock\CreateController');
   Route::get('/delete-block/{id}', 'ProductBlock\DeleteController');
   Route::post('/edit-block/{id}', 'ProductBlock\EditController');
   Route::get('/get-my', 'My\IndexController');
   Route::post('/add-account', 'Account\CreateController');
   Route::post('/add-social', 'Social\CreateController');
   Route::post('/edit-social', 'Social\EditController');
   // Products
   Route::post('/get-products/{id}', 'Product\IndexController');
   Route::get('/product-moderator/{id}', 'Product\ProductModeratorController');
   Route::post('/edit-product/{product_id}', 'Product\EditController');
   Route::get('/delete-product/{product_id}', 'Product\DeleteController');
   Route::post('/add-product', 'Product\CreateController');
   Route::get('/product-data/{product_uri}', 'Product\ProductController');
   Route::get('/product-activity-types', 'ProductActivity\ActivityTypesController');
   Route::post('/add-product-activity', 'ProductActivity\CreateController');
   Route::post('/product-activities/{product_id}', 'ProductActivity\IndexController');

   Route::get('/get-indexes/{product_id}', 'Index\IndexController');
   Route::post('/edit-product-key', 'Index\EditController');
   Route::post('/upload-product-logo/{product_id}', 'Product\UploadController');

   Route::post('/scam-messages', 'Scam\IndexController');
   //Chart
   Route::get('/product-tg-day-wt-chart/{product_id}', 'Chart\TgDayWTChartController');
   Route::get('/product-tg-day-cost-chart/{product_id}', 'Chart\TgDayCostChartController');
   Route::get('/product-day-rating-chart/{product_id}', 'Chart\DayRatingChartController');
   
   Route::post('/search-tg-username', 'Scam\SearchTgUserController'); //searchTgUsername.js
   Route::post('/search-product', 'Scam\SearchProductController'); //searchProduct.js

   

});
