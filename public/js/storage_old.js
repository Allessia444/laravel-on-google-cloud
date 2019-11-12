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
  var branch_data = localStorage['branch'] ? JSON.parse(localStorage['branch']) : [];
  if ($('#branch_name').val() == '') {
    $('#error_branch_name').text('Pls Enter name');
    return
  }else{ $('#error_branch_name').text('') }
  if ($('#branch_manager').val() == '') {
    $('#error_branch_manager').text('Pls select manager');
    return
  }else{ $('#error_branch_manager').text('') }
  if ($('#branch_email').val() == '') {
    $('.error_branch_email').text('Pls Enter email');
    return
  }else{ 
    if( !validateEmail($('#branch_email').val())) { 
      $('.error_branch_email').text('Enter valid email address') 
      return
    }
    for (var i = 0; i < branch_data.length; i++) {
      if (branch_data[i].email == $('#branch_email').val()) {
        $('.error_branch_email').text('Email address alredy exits') 
        return
      }else{$('.error_branch_email').text('') }
    }
    $('.error_branch_email').text('') 
  }
  if ($('#branch_password').val() == '') {
    $('#error_branch_password').text('Pls Enter password');
    return
  }else{ $('#error_branch_password').text('') }
  if ($('#branch_location').val() == '') {
    $('#error_branch_location').text('Pls Enter location');
    return
  }else{ $('#error_branch_location').text('') }
  var id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1
  var branch = {
    id : id,
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
  var level_data = localStorage['level'] ? JSON.parse(localStorage['level']) : [];
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
  }else{ 
    if( !validateEmail($('#level_email').val())) { 
      $('.error_level_email').text('Enter valid email address') 
      return
    }
    for (var i = 0; i < level_data.length; i++) {
      if (level_data[i].email == $('#level_email').val()) {
        $('.error_level_email').text('Email address alredy exits') 
        return
      }else{$('.error_level_email').text('') }
    }
    $('.error_level_email').text('') 
  }
  if ($('#level_password').val() == '') {
    $('#error_level_password').text('Pls Enter password');
    return
  }else{ $('#error_level_password').text('') }
  if ($('#level_number').val() == '') {
    $('#error_level_number').text('Pls Enter contact number');
    return
  }else{ $('#error_level_number').text('') }
  var id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1
  var level = {
    id: id,
    name : $('#authorization_level').val(),
    person : $('#level_person').val(),
    email : $('#level_email').val(),
    password : $('#level_password').val(),
    number : $('#level_number').val(),
  };
  localStore('level',level);
  $('.level').modal('hide');
});
$(document).on('keyup','.number',function(e)
{
  if (/\D/g.test(this.value))
  {
    this.value = this.value.replace(/\D/g, '');
  }
});
$(document).on('click','.employee_submit', function(){
  var employee_data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  if ($('#employee_name').val() == '') {
    $('#error_employee_name').text('Pls Enter name');
    return
  }else{ $('#error_employee_name').text('') }
  if ($('.employee_email').val() == '') {
    $('.error_employee_email').text('Pls Enter email');
    return
  }else{ 
    if( !validateEmail($('.employee_email').val())) { 
      $('.error_employee_email').text('Enter valid email address') 
      return
    }
    for (var i = 0; i < employee_data.length; i++) {
      if (employee_data[i].email == $('.employee_email').val()) {
        $('.error_employee_email').text('Email address alredy exits') 
        return
      }else{$('.error_employee_email').text('') }
    }
    $('.error_employee_email').text('') 
  }
  if ($('#employee_password').val() == '') {
    $('#error_employee_password').text('Pls Enter password');
    return
  }else{ $('#error_employee_number').text('') }
  var id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1
  var employee = {
    id : id,
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
    "<td class='id' style='display:none'>"+ data[i].id + "</td>"+
    "<td class='name'>"+ data[i].name + "</td>"+
    "<td class='email'>"+ data[i].email + "</td>"
    for (var j = 0; j < employee_data.length; j++) {
      if (employee_data[j].email == data[i].manager) {
        $html += "<td class='branch_manager'>"+ employee_data[j].name +"</td>"
      }
    } 
    $html += "<td> <a class='branch_add add_symbol' title='Save' data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>"+
          "<a class='branch_edit edit_symbol' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"+
          "<a class='branch_delete delete_symbol' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a> </td>"
    +"</tr>";
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
    "<td class='id' style='display:none'>"+ data[i].id + "</td>"+
    "<td class='name'>"+ data[i].name + "</td>"+
    "<td class='email'>"+ data[i].email +"</td>"
    for (var j = 0; j < employee_data.length; j++) {
      if (employee_data[j].email == data[i].person) {
        $html += "<td>"+ employee_data[j].name +"</td>"
      }
    }
    $html += "<td> <a class='level_add add_symbol' title='Save' data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>"+
          "<a class='level_edit edit_symbol' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"+
          "<a class='level_delete delete_symbol' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a> </td>"
    +"</tr>";
  }
  $('#level_data').html($html);
  $('#show_level').modal();
});
$('.show_employee').click(function(){
  var data = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  $html = '';
  for (var i = 0; i < data.length; i++) {
    $html +="<tr>"+
    "<td class='id' style='display:none'>"+ data[i].id + "</td>"+
    "<td class='name'>"+ data[i].name + "</td>"+
    "<td class='email'>"+ data[i].email + "</td>"+
    "<td class='contact_number'>"+ data[i].contact_number + "</td>"+
    "<td> <a class='employee_add add_symbol' title='Save' data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>"+
          "<a class='employee_edit edit_symbol' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"+
          "<a class='employee_delete delete_symbol' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a> </td>"
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
  //var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-])?$/;
  var emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailReg.test( $email );
}
$(document).on('keyup','.employee_email', function(){
  var employee = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  var employee_id = $(this).parents("tr").children('td.id').children('input').val();
  for (var i = 0; i < employee.length; i++) {
    if (employee[i].email == $(this).val() && employee[i].id != employee_id) {
      $('.error_employee_email').text('Email address alredy exits') 
      return
    }else{ $('.error_employee_email').text('') }
  }
})
$(document).on('keyup','.branch_email', function(){
  var branch = localStorage['branch'] ? JSON.parse(localStorage['branch']) : [];
  var branch_id = $(this).parents("tr").children('td.id').children('input').val();
  for (var i = 0; i < branch.length; i++) {
    if (branch[i].email == $(this).val() && branch[i].id != branch_id) {
      $('.error_branch_email').text('Email address alredy exits') 
      return
    }else{ $('.error_branch_email').text('') }
  }
})
$(document).on('keyup','.level_email', function(){
  var level = localStorage['level'] ? JSON.parse(localStorage['level']) : [];
  var level_id = $(this).parents("tr").children('td.id').children('input').val();
  for (var i = 0; i < level.length; i++) {
    if (level[i].email == $(this).val() && level[i].id != level_id) {
      $('.error_level_email').text('Email address alredy exits') 
      return
    }else{ $('.error_level_email').text('') }
  }
})
$(document).on("click", ".employee_edit", function(){    
  $(this).parents("tr").find("td:not(:last-child)").each(function(){
    if (this.className == 'email'){
      $(this).html('<input type="email" class="form-control employee_email email" value="' + $(this).text() + '">');
      $(this).append('<span class="error_employee_email error error_email"></span>')
    }else{
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    }
  });   
  $(this).parents("tr").find(".add_symbol, .edit_symbol").toggle();
  $(".add-new").attr("disabled", "disabled");
});
$(document).on("click", ".branch_edit", function(){
var employee = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];    
  $(this).parents("tr").find("td:not(:last-child)").each(function(){
    if (this.className == 'email'){
      $(this).html('<input type="email" class="form-control branch_email" value="' + $(this).text() + '">');
      $(this).append('<span class="error_branch_email error"></span>')
    }else{
      if (this.className == 'branch_manager') {
        $html = ''
        for (var i = 0; i < employee.length; i++) {
            $html += "<option value="+ employee[i].email +">"+ employee[i].name +"</option>"
        }
        $(this).html('<select class="selectpicker" data-live-search="true" name="branch_manager">'+ $html +'</select>')
        $('.selectpicker').selectpicker();
      }else{
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
      }
    }
  });   
  $(this).parents("tr").find(".add_symbol, .edit_symbol").toggle();
  $(".add-new").attr("disabled", "disabled");
});
$(document).on("click", ".level_edit", function(){    
  $(this).parents("tr").find("td:not(:last-child)").each(function(){
    if (this.className == 'email'){
      $(this).html('<input type="email" class="form-control level_email" value="' + $(this).text() + '">');
      $(this).append('<span class="error_level_email error"></span>')
    }else{
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    }
  });   
  $(this).parents("tr").find(".add_symbol, .edit_symbol").toggle();
  $(".add-new").attr("disabled", "disabled");
});
$(document).on("click", ".employee_delete", function(){
  var employee = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  $(this).parents("tr").remove();
  $(".add-new").removeAttr("disabled");
  var employee_id = $(this).parents("tr").children('td.id').text();

  employee.find(function(element) { 
    if(element.id == employee_id){
      employee.pop(element)
    }
  });
  window.localStorage.setItem('employee', JSON.stringify(employee)); 
});
$(document).on("click", ".employee_add", function(){
  var employee = localStorage['employee'] ? JSON.parse(localStorage['employee']) : [];
  var employee_id = $(this).parents("tr").children('td.id').children('input').val();
  var empty = false;
  var input = $(this).parents("tr").find('input[type="text"]');
  var input_email = $(this).parents("tr").find('input[type="email"]');
  input.each(function(){
    if(!$(this).val()){
      $(this).addClass("error");
      empty = true;
    } else{
      $(this).removeClass("error");
    }
  });
  input_email.each(function(){
    if(!$(this).val()){
      $(this).addClass("error");
      empty = true;
    } else{
      if(!validateEmail($(this).val()))
      {
        $(this).addClass("error");
        $('.error_employee_email').text("pls valid email address")
        empty = true;
        return
      }
      for (var i = 0; i < employee.length; i++) {
        if (employee[i].email == $(this).val() && employee[i].id != employee_id) {
          $('.error_employee_email').text('Email address alredy exits') 
          empty = true;
          return
        }
      }
      $(this).removeClass("error");
    }
  });
  $(this).parents("tr").find(".error").first().focus();
  if(!empty){
    input.each(function(){
      $(this).parent("td").html($(this).val());
    });
    input_email.each(function(){
      $(this).parent("td").html($(this).val());
    });     
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").removeAttr("disabled");
  }
  var employee_email = $(this).parents("tr").children('td.email').text();
  var employee_name = $(this).parents("tr").children('td.name').text();
  var employee_contact_number = $(this).parents("tr").children('td.contact_number').text();
  employee.find(function(element) { 
    if(element.id == employee_id){
      element.name = employee_name
      element.email = employee_email
      element.contact_number = employee_contact_number
    }
  });
  window.localStorage.setItem('employee', JSON.stringify(employee)); 

});
$(document).on("click", ".level_add", function(){
  var level = localStorage['level'] ? JSON.parse(localStorage['level']) : [];
  var level_id = $(this).parents("tr").children('td.id').children('input').val();
  var empty = false;
  var input = $(this).parents("tr").find('input[type="text"]');
  var input_email = $(this).parents("tr").find('input[type="email"]');
  input.each(function(){
    if(!$(this).val()){
      $(this).addClass("error");
      empty = true;
    } else{
      $(this).removeClass("error");
    }
  });
  input_email.each(function(){
    if(!$(this).val()){
      $(this).addClass("error");
      empty = true;
    } else{
      if(!validateEmail($(this).val()))
      {
        $(this).addClass("error");
        $('.error_level_email').text("pls valid email address")
        empty = true;
        return
      }
      for (var i = 0; i < level.length; i++) {
        if (level[i].email == $(this).val() && level[i].id != level_id) {
          $('.error_level_email').text('Email address alredy exits') 
          empty = true;
          return
        }
      }
      $(this).removeClass("error");
    }
  });
  $(this).parents("tr").find(".error").first().focus();
  if(!empty){
    input.each(function(){
      $(this).parent("td").html($(this).val());
    });
    input_email.each(function(){
      $(this).parent("td").html($(this).val());
    });     
    $(this).parents("tr").find(".add_symbol, .edit_symbol").toggle();
    $(".add-new").removeAttr("disabled");
  }
  var level_email = $(this).parents("tr").children('td.email').text();
  var level_name = $(this).parents("tr").children('td.name').text();
  var level_contact_number = $(this).parents("tr").children('td.level_number').text();
  level.find(function(element) { 
    if(element.id == level_id){
      element.name = level_name
      element.email = level_email
      element.contact_number = level_contact_number
    }
  });
  window.localStorage.setItem('level', JSON.stringify(level)); 

});
$(document).on("click", ".level_delete", function(){
  var level = localStorage['level'] ? JSON.parse(localStorage['level']) : [];
  $(this).parents("tr").remove();
  $(".add-new").removeAttr("disabled");
  var level_id = $(this).parents("tr").children('td.id').text();

  level.find(function(element) { 
    if(element.id == level_id){
      level.pop(element)
    }
  });
  window.localStorage.setItem('level', JSON.stringify(level)); 
});
$(document).on("click", ".branch_add", function(){
  var branch = localStorage['branch'] ? JSON.parse(localStorage['branch']) : [];
  var branch_id = $(this).parents("tr").children('td.id').children('input').val();
  var empty = false;
  var input = $(this).parents("tr").find('input[type="text"]');
  var select = $(this).parents("tr").find('select option:selected');
  var input_email = $(this).parents("tr").find('input[type="email"]');
  input.each(function(){
    if(!$(this).val()){
      $(this).addClass("error");
      empty = true;
    } else{
      $(this).removeClass("error");
      empty = false;
    }
  });
  var branch_manager_name
  select.each(function(){
    branch_manager_name = $(this).val();
  });
  input_email.each(function(){
    if(!$(this).val()){
      $(this).addClass("error");
      empty = true;
    } else{
      if(!validateEmail($(this).val()))
      {
        $(this).addClass("error");
        $('.error_branch_email').text("pls valid email address")
        empty = true;
        return
      }
      for (var i = 0; i < branch.length; i++) {
        if (branch[i].email == $(this).val() && branch[i].id != branch_id) {
          $('.error_branch_email').text('Email address alredy exits') 
          empty = true;
          return
        }
      }
      $(this).removeClass("error");
      empty = false;
    }
  });
  $(this).parents("tr").find(".error").first().focus();
  if(!empty){
    input.each(function(){
      $(this).parent("td").html($(this).val());
    });
    input_email.each(function(){
      $(this).parent("td").html($(this).val());
    });
    select.each(function(){
      $(this).parent().parent().parent("td").html($(this).text());
    });     
    $(this).parents("tr").find(".add_symbol, .edit_symbol").toggle();
    $(".add-new").removeAttr("disabled");
  }
  var branch_email = $(this).parents("tr").children('td.email').text();
  var branch_name = $(this).parents("tr").children('td.name').text();
  //var branch_contact_number = $(this).parents("tr").children('td.level_number').text();
  branch.find(function(element) { 
    if(element.id == branch_id){
      element.name = branch_name
      element.email = branch_email
      element.manager = branch_manager_name
      //element.contact_number = employee_contact_number
    }
  });
  window.localStorage.setItem('branch', JSON.stringify(branch)); 

});
$(document).on("click", ".branch_delete", function(){
  var branch = localStorage['branch'] ? JSON.parse(localStorage['branch']) : [];
  $(this).parents("tr").remove();
  $(".add-new").removeAttr("disabled");
  var branch_id = $(this).parents("tr").children('td.id').text();

  branch.find(function(element) { 
    if(element.id == branch_id){
      branch.pop(element)
    }
  });
  window.localStorage.setItem('branch', JSON.stringify(branch)); 
});