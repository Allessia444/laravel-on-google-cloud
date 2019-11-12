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