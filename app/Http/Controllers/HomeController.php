<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }

    public function table()
    {
        return view('table');
    }

    public function getSketch()
    {
        return view('sketch');
    }

    public function downloadSketch(Request $request){
        $type = explode("/", $request->prev_url) ;
        
        $image = $request->file; // image base64 encoded
        
        preg_match("/data:image\/(.*?);/",$image,$image_extension); // extract the image extension
        $image = preg_replace('/data:image\/(.*?);base64,/','',$image); // remove the type part
        $image = str_replace(' ', '+', $image);
        $imageName = 'sketch_' . time() . '.' . $image_extension[1]; //generating unique file name;
        
        File::put(base_path().'/public/images/' . $imageName, base64_decode($image));
        
        
        
        return response($imageName,202);
    }
}
