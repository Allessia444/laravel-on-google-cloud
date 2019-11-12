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