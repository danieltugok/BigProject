<?php

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('auth/login', 'Api\AuthController@login');
Route::post('user/store', 'Api\UserController@store');  
Route::post('company/store', 'Api\CompanyController@store');
Route::get('company/list', 'Api\CompanyController@index'); 
Route::post('company/{company}', 'Api\CompanyController@show'); 


Route::get('user/list', 'Api\UserController@index'); 
Route::post('user/{users}', 'Api\UserController@show');   
Route::post('user/{users}/companies', 'Api\UserController@companies');   

Route::group(['middleware' => ['apiJwt'], 'namespace' => 'Api'], function(){

    Route::post('auth/logout', 'AuthController@logout');
    Route::post('auth/refresh', 'AuthController@refresh');
    Route::post('auth/me', 'AuthController@me');
    Route::post('auth/token', 'AuthController@respondWithToken');

       
    
         
          
         
});
