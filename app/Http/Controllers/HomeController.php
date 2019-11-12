<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;
use Storage;
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

         
          
        // File::makeDirectory(base_path().'/public/images/', 0777, true, true);
          Storage::disk('public')->put("images/".$imageName, base64_decode($image));
        // File::put(base_path().'/public/images/' . $imageName, base64_decode($image));
        
        
        
        return response($imageName,202);
    }

    public function getJson()
    {
        return view('writetojson');
    }

    public function writeJson(Request $request)
    {
        $myFile = "/resources/views/theme.json";
        $arr_data = array();
        $formdata = array(
                  'firstName'=> $request->fname,
                  'lastName'=> $request->lname,
                  'email'=>$request->email,
                  'mobile'=> $request->mobile
               );
         // $jsondata = File::get(base_path()."/".$myFile);
               // $arr_data = json_decode($jsondata, true);
               array_push($arr_data,$formdata);
               $arr_data = json_encode($arr_data, JSON_PRETTY_PRINT);
               if(File::put(base_path($myFile), $arr_data)) {
                    echo 'Data successfully saved';
                }
               else {
                    echo "error";
               }

        return response('success',202);
    }
}
