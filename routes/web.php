<?php

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

// Route::get('/step-wizard', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/table', 'HomeController@table')->name('table');
Route::get('/sketch', 'HomeController@getSketch')->name('sketch');
Route::get('/write-to-json', 'HomeController@getJson')->name('writetojson');
Route::post('/write-to-json', 'HomeController@writeJson')->name('writeto');

Route::post('/download-sketchpad','HomeController@downloadSketch');
