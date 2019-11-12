var employee_data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
var form = $("#example-form");
form.validate({
  errorPlacement: function errorPlacement(error, element) { element.before(error); },
  rules: {
    confirm: {
      equalTo: "#password"
    }
  }
});
form.children("div").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  onStepChanging: function (event, currentIndex, newIndex)
  {
    form.validate().settings.ignore = ":disabled,:hidden";
    if (currentIndex == 0) {
      localStorage['name'] = $('#name').val();
      localStorage['email'] = $('#email').val();
      localStorage['password'] = $('#password').val();
    }
    if (currentIndex == 1) {
      localStorage['contact_number'] = $('#contact_number').val();
      localStorage['state'] = $('#state').val();
      localStorage['city'] = $('#city').val(); 
      localStorage['country'] = $('#country').val(); 
    }
    return form.valid();
  },
  onFinishing: function (event, currentIndex)
  {
    form.validate().settings.ignore = ":disabled";
    return form.valid();
  },
  onFinished: function (event, currentIndex)
  {
    alert("Submitted!");
  }
});
$('#name').val(localStorage['name']);
$('#email').val(localStorage['email']);
$('#password').val(localStorage['password']);
$('#contact_number').val(localStorage['contact_number']);
$('#state').val(localStorage['state']);
$('#city').val(localStorage['city']);
$('#country').val(localStorage['country']);
$(document).on('keyup','.number',function(e)
{
  if (/\D/g.test(this.value))
  {
    this.value = this.value.replace(/\D/g, '');
  }
});
function localStore(key, obj) {
  $data = localStorage[key] ? JSON.parse(localStorage[key]) : [];
  if($data){ 
    $data.push(obj)
  }else{
    [];
  } 
  if($data.length == 0) $data.push($data)
  localStorage.setItem(key, JSON.stringify($data));
  return window.localStorage.setItem(key, JSON.stringify($data));
}
function localGet(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
$(document).ready(function(){
  $data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  if($data.length == 0){
    $('button#branch').attr('disabled', true) 
    $('button#level').attr('disabled', true)
    $('button.show_level').attr('disabled', true) 
    $('button.show_branch').attr('disabled', true)
    $('button.show_employee').attr('disabled', true)
  } 
})
function validateEmail($email) {
  //var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-])?$/;
  var emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailReg.test( $email );
}