var employee_data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
$(document).on('click','#branch',function(){
  $('div.branch input').val('');
  $('div.branch span').text('');
  var employee = JSON.parse(localStorage['employee'])
  $html = '';
  $html += "<option selected value=''>Choose branch manager</option>"
  for (var i = 0; i < employee.length; i++) {
    $html +="<option value=" + employee[i].email + ">"+ employee[i].name + "</option>";
  }
  $('#branch_manager').html($html);
  $('.branch').modal('show');
})
$(document).on('click','#level',function(){
  $('div.level input').val('');
  $('div.level span').text('');
  var employee = JSON.parse(localStorage['employee'])
  $html = '';
  $html += "<option selected value=''>Choose branch manager</option>"
  for (var i = 0; i < employee.length; i++) {
    $html +="<option value=" + employee[i].email + ">"+ employee[i].name + "</option>";
  }
  $('#level_person').html($html);
  $('.level').modal('show');
})
$(document).on('click','#employee',function(){
  $('div.employee input').val('');
  $('div.employee span').text('');
  $('.employee').modal('show');
})
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
$(document).on('click','.branch_submit', function(){
  console.log($('#branch_manager').val());
  if ($('#branch_name').val() == '') {
    $('#error_branch_name').text('Pls Enter name');
    return
  }else{ $('#error_branch_name').text('') }
  if ($('#branch_manager').val() == '') {
    $('#error_branch_manager').text('Pls select manager');
    return
  }else{ $('#error_branch_manager').text('') }
  if ($('#branch_email').val() == '') {
    $('#error_branch_email').text('Pls Enter email');
    return
  }else{ $('#error_branch_email').text('') }
  if ($('#branch_password').val() == '') {
    $('#error_branch_password').text('Pls Enter password');
    return
  }else{ $('#error_branch_password').text('') }
  if ($('#branch_location').val() == '') {
    $('#error_branch_location').text('Pls Enter location');
    return
  }else{ $('#error_branch_location').text('') }
  var branch = {
    name : $('#branch_name').val(),
    manager : $('#branch_manager').val(),
    email : $('#branch_email').val(),
    password : $('#branch_password').val(),
    location : $('#branch_location').val(),
  };
  localStore('branch',branch);
  $('.branch').modal('hide');
});
$(document).on('click','.authorization_submit', function(){
  if ($('#authorization_level').val() == '') {
    $('#error_level_name').text('Pls Enter authorization level name');
    return
  }
  if ($('#level_person').val() == '') {
    $('#error_level_person').text('Pls select authorized person');
    return
  }else{ $('#error_level_person').text('') }
  if ($('#level_email').val() == '') {
    $('#error_level_email').text('Pls Enter email');
    return
  }else{ $('#error_level_email').text('') }
  if ($('#level_password').val() == '') {
    $('#error_level_password').text('Pls Enter password');
    return
  }else{ $('#error_level_password').text('') }
  if ($('#level_number').val() == '') {
    $('#error_level_number').text('Pls Enter contact number');
    return
  }else{ $('#error_level_number').text('') }
  var level = {
    name : $('#authorization_level').val(),
    person : $('#level_person').val(),
    email : $('#level_email').val(),
    password : $('#level_password').val(),
    number : $('#level_number').val(),
  };
  localStore('level',level);
  $('.level').modal('hide');
});
$(document).on('click','.employee_submit', function(){
  if ($('#employee_name').val() == '') {
    $('#error_employee_name').text('Pls Enter name');
    return
  }else{ $('#error_employee_name').text('') }
  if ($('#employee_email').val() == '') {
    $('#error_employee_email').text('Pls Enter email');
    return
  }else{ 
    if( !validateEmail($('#employee_email').val())) { 
      $('#error_employee_email').text('Enter valid email address') 
      return
    }
    for (var i = 0; i < employee_data.length; i++) {
      if (employee_data[i].email == $('#employee_email').val()) {
        $('#error_employee_email').text('Email address alredy exits') 
        return
      }else{$('#error_employee_email').text('') }
    }
    $('#error_employee_email').text('') 
  }
  if ($('#employee_password').val() == '') {
    $('#error_employee_password').text('Pls Enter password');
    return
  }else{ $('#error_employee_number').text('') }
  var employee = {
    name : $('#employee_name').val(),
    email : $('#employee_email').val(),
    password : $('#employee_password').val(),
    contact_number : $('#employee_contact_number').val()
  };
  localStore('employee',employee);
  $('button#branch').attr('disabled', false)
  $('button#level').attr('disabled', false)
  $('button.show_branch').attr('disabled', false) 
  $('button.show_level').attr('disabled', false)
  $('button.show_employee').attr('disabled', false)
  $('.employee').modal('hide');
});
$('.show_branch').click(function(){
  var employee_data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  var data = localStorage['branch'] ? JSON.parse(localStorage['branch']) : [];
  $html = '';
  for (var i = 0; i < data.length; i++) {
    $html +="<tr>"+
    "<td>"+ (i+1) + "</td>"+
    "<td>"+ data[i].name + "</td>"+
    +"</tr>";
    for (var j = 0; j < employee_data.length; j++) {
      if (employee_data[j].email == data[i].manager) {
        console.log(employee_data[j].name)
        $html += "<td>"+ employee_data[j].name +"</td>"
      }
    } 
  }
  $('#branch_data').html($html);
  $('#show_branch').modal();
});
$('.show_level').click(function(){
  var employee_data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  var data = localStorage['level'] ? JSON.parse(localStorage['level']) : [];
  $html = '';
  for (var i = 0; i < data.length; i++) {
    $html +="<tr>"+
    "<td>"+ (i+1) + "</td>"+
    "<td>"+ data[i].name + "</td>"+
    +"</tr>";
    for (var j = 0; j < employee_data.length; j++) {
      if (employee_data[j].email == data[i].person) {
        console.log(employee_data[j].name)
        $html += "<td>"+ employee_data[j].name +"</td>"
      }
    } 
  }
  $('#level_data').html($html);
  $('#show_level').modal();
});
$('.show_employee').click(function(){
  var data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  $html = '';
  for (var i = 0; i < data.length; i++) {
    $html +="<tr>"+
    "<td>"+ (i+1) + "</td>"+
    "<td>"+ data[i].name + "</td>"+
    "<td>"+ data[i].email + "</td>"+
    +"</tr>";
  }
  $('#employee_data').html($html);
  $('#show_employee').modal();
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
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
$(document).on('keyup','#employee_email', function(){
  for (var i = 0; i < employee_data.length; i++) {
    if (employee_data[i].email == $('#employee_email').val()) {
      $('#error_employee_email').text('Email address alredy exits') 
      return
    }else{$('#error_employee_email').text('') }
  }
})