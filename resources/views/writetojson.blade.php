@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form action="/write-to-json" method="POST" id="form">
						First name:<br>
						<input type="text" id="fname" name="firstName">
						<br><br/>
						Last name:<br>
						<input type="text" id="lname" name="lastName">
						<br><br>
						  
						Email:<br>
						<input type="text" id="email" name="email">
						<br><br>
						  
						Mobile:<br>
						<input type="text" id="mobile" name="mobile">
						<br><br>
						<input type="submit" id="submit" value="Submit">
					</form>
                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('script')
	<script>
		$(document).ready(function(){
			$(document).on('click','#submit',function(e){
				e.preventDefault();
				var fname = $('#fname').val();
				var lname = $('#lname').val();
				var email = $('#email').val();
				var mobile = $('#mobile').val();

				$.ajax({
					url: '/write-to-json',
	                type: 'POST',
	                data: { fname:fname,lname:lname,email:email,mobile:mobile, "_token": "{{ csrf_token() }}"},
	                success: function(data){
	                	console.log(data)
	                	alert('successfully added');
	                	location.reload();
	                  // $('#download-link').attr('href',data);
	                  // $('#uploadedModal').modal('hide');
	                },
	                error: function(response){
	                    alert('Please try after some time');
	                }
				})
			});
		})
	</script>
@endsection

