$(document).on('click','#employee',function(){
  $('div.employee input').val('');
  $('div.employee span').text('');
  $('.employee').modal('show');
})
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
$(document).on('click','.show_employee',function(){
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