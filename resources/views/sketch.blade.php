<div style="width:1492px;height:600px;border:2px dotted gray;margin:20px;">
    <canvas id="canvas3"></canvas>
</div>
<input type="file" id="file-picker" style="display:none;">
<a href="" id="download_file" download></a>

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
        $('.mdi.mdi-square.mdi-24px').parent('button').css('display','none');

        $('.mdi.mdi-vector-square.mdi-24px').parent('button').css('display',"none")
        $('.mdi.mdi-vector-square.mdi-24px').parent('button').css('display',"none")
        $('.mdi.mdi-spray.mdi-24px').parent('button').css('display',"none")
        $('.mdi.mdi-brush.mdi-24px').parent('button').css('display',"none")
        $('.mdi.mdi-eyedropper.mdi-24px').parent('button').css('display',"none")
        $('.mdi.mdi-cursor-move.mdi-24px').parent('button').css('display',"none")
        $('.mdi.mdi-magnify.mdi-24px').parent('button').css('display',"none")
        $('.mdi .mdi-folder-open .mdi-24px').parent('button').css('display',"none")

        //add custom save button.
        // var buttoncollection = $("#canvas3").drawr("button", {
        //     "icon":"mdi mdi-folder-open mdi-24px"
        // }).on("touchstart mousedown",function(){
        //     $("#file-picker").click();
        // });
        var buttoncollection = $("#canvas3").drawr("button", {
            "icon":"mdi mdi-content-save mdi-24px"
        }).on("touchstart mousedown",function(){

            var imagedata = $("#canvas3").drawr("export","image/jpeg");
            
            var file = imagedata;
            
            $.ajax({
                url: '/download-sketchpad',
                type: 'POST',
                data: { file : file, "_token": "{{ csrf_token() }}"},
                success: function(data){

              $('#download_file').attr('href','/storage/images/'+data);
                  document.getElementById('download_file').click();
                   location.reload();
                  // $('#download-link').attr('href',data);
                  // $('#uploadedModal').modal('hide');
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
            $('#canvas3').parent('div').css({'height':'auto','width':'1492px'});
            $("#canvas3").drawr("load",e.target.result);
        };
        reader.readAsDataURL(file);
    };

});
</script>
