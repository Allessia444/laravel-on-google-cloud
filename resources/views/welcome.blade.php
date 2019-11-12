<div style="width:95%;height:600px;border:2px dotted gray;margin:20px;">
<canvas id="canvas3"></canvas>
</div>
<input type="file" id="file-picker" style="display:none;">
{{-- <button class="btn btn-primary pull-right" style="margin-right:60px;" id="save"><i class="mdi mdi-content-save mdi-24px"></i>Save</button> --}}

<link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript" src="{!! asset('/js/jquery-drawr-combined.js') !!}"></script>
<script type="text/javascript" src="{!! asset('/js/jquery-drawr-combined-min.js') !!}"></script>
<script type="text/javascript">
$(document).ready(function(){

// $("#canvas").drawr({ "enable_tranparency" : true, "canvas_width" : 800, "canvas_height" : 800 });
// $("#canvas").drawr("start");
$("#canvas3").drawr({
"enable_tranparency" : false
});

//Enable drawing mode, show controls
$("#canvas3").drawr("start");

//add custom save button.
var buttoncollection = $("#canvas3").drawr("button", {
"icon":"mdi mdi-folder-open mdi-24px"
}).on("touchstart mousedown",function(){
$("#file-picker").click();
});
var buttoncollection = $("#canvas3").drawr("button", {
"icon":"mdi mdi-content-save mdi-24px"
}).on("touchstart mousedown",function(){

var imagedata = $("#canvas3").drawr("export","image/jpeg");

var file = imagedata;

$.ajax({
url: '/admin/my-jobs/download-sketchpad/',
type: 'POST',
data: { file : file, "_token": "{{ csrf_token() }}",prev_url:""},
success: function(data){
console.log(data);
// $('#download-link').attr('href',data);
// document.getElementById('download-link').click();
// $('#uploadedModal').modal('hide');
document.location.href=data;
},
error: function(response){
alert('Please try after some time');
}
});
// var element = document.createElement('a');
// element.setAttribute('href', imagedata);
// element.setAttribute('download', "test.jpg");
// element.style.display = 'none';
// document.body.appendChild(element);
// element.click();
// document.body.removeChild(element);
});
$("#file-picker")[0].onchange = function(){
var file = $("#file-picker")[0].files[0];
if (!file.type.startsWith('image/')){ return }
var reader = new FileReader();
reader.onload = function(e) { 
$("#canvas3").drawr("load",e.target.result);
};
reader.readAsDataURL(file);
};

$(document).on('click','#save',function(e){
var imagedata = $("#canvas3").drawr("export","image/jpeg");

var file = imagedata;

$.ajax({
url: '/admin/my-jobs/download-sketchpad/',
type: 'POST',
data: { file : file, "_token": "{{ csrf_token() }}",prev_url:""},
success: function(data){
console.log(data);
// $('#download-link').attr('href',data);
// document.getElementById('download-link').click();
// $('#uploadedModal').modal('hide');
document.location.href=data;
},
error: function(response){
alert('Please try after some time');
}
});
})
});
</script>