<!DOCTYPE html>
<html lang="en">
<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="">
  <link rel="stylesheet" href="{!! asset('css/bootstrap.min.css') !!}">
  <link rel="stylesheet" href="{!! asset('css/jquery.steps.css') !!}">
  <link rel="stylesheet" href="{!! asset('css/table.css') !!}">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css">
  <link rel="stylesheet" href="{!! asset('css/loader.css') !!}">
  <script src="{!! asset('js/jquery.min.js') !!}"></script>
  <script src="{!! asset('js/popper.min.js') !!}"></script>
  <script src="{!! asset('js/bootstrap.min.js') !!}"></script>
  <script src="{!! asset('js/jquery.steps.min.js') !!}"></script>
  <script src="{!! asset('js/jquery.validate.min.js') !!}"></script>
  
</head>
<body>
  <div class="loader">
    <div class="circle"></div>
    <div class="circle-small"></div>
    <div class="circle-big"></div>
    <div class="circle-inner-inner"></div>
    <div class="circle-inner"></div>
  </div>
  <div class="container mt-3">
    <form id="example-form" action="#" style="display: none;">
      <div>
        <h3>General</h3>
        <section>
          <div class="form-group">
            <div class="col-xs-6">
                <label for="name">Name</label>
                <input type="text" class="form-control required" name="name" id="name" placeholder="first name" title="enter your name.">
            </div>
          </div>
          <div class="form-group">
              
              <div class="col-xs-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control required email" name="email" id="email" placeholder="you@email.com">
              </div>
          </div>
          <div class="form-group">
              <div class="col-xs-6">
                  <label for="password">Password</label>
                  <input type="password" class="form-control required" name="password" id="password" placeholder="password" title="enter your password.">
              </div>
          </div>
        </section>
        <h3>Company Profile</h3>
        <section>
          <div class="form-group">
            <div class="col-xs-6">
              <label for="contact_number">Phone number</label>
                <input type="text" class="form-control required number" name="contact_number" id="contact_number" placeholder="phone number....." title="enter your phone number">
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6">
              <label for="city">City</label>
                <input type="text" class="form-control required" name="city" id="city" placeholder="city.." title="enter your city.">
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6">
              <label for="state">State</label>
                <input type="text" class="form-control required" name="state" id="state" placeholder="state..." title="enter your state.">
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6">
              <label for="country">Country</label>
                <input type="text" class="form-control required" name="country" id="country" placeholder="Country...." title="enter your country.">
            </div>
          </div>
          <button type="button" class="btn btn-lg btn-success" id="branch">Create Branch Here</button>
          <button type="button" class="btn btn-lg btn-success" id="level">Create Authorization Level</button>
          <button type="button" class="btn btn-lg btn-success" id="employee">Create Employee</button><br><br>
          <button type="button" class="btn btn-lg btn-success show_branch">View Branch Here</button>
          <button type="button" class="btn btn-lg btn-success show_level">View Authorization Level</button>
          <button type="button" class="btn btn-lg btn-success show_employee">View Employee</button>
        </section>
        <h3>Device</h3>
        <section>
            <ul>
                <li>Foo</li>
                <li>Bar</li>
                <li>Foobar</li>
            </ul>
        </section>
        <h3>Payment</h3>
        <section>
            <input id="acceptTerms" name="acceptTerms" type="checkbox" class="required"> <label for="acceptTerms">I agree with the Terms and Conditions.</label>
        </section>
      </div>
    </form>
  </div>
  <div class="modal fade branch" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Branch</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              x
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="branch_name">Name</label>
                <input type="text" class="form-control required" id="branch_name" aria-describedby="emailHelp" placeholder="Enter branch name..." name="branch_name">
                <span id="error_branch_name" class="error"></span>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="branch_manager">Branch manager</label>
                </div>
                <select class="custom-select" id="branch_manager">
                </select>
              </div>
              <span id="error_branch_manager" class="error"></span>
              <div class="form-group">
                <label for="branch_email">Email</label>
                <input type="email" class="form-control required" id="branch_email" aria-describedby="emailHelp" placeholder="Enter branch email..." name="branch_email">
                <span class="error error_branch_email"></span>
              </div>
              <div class="form-group">
                <label for="branch_password">password</label>
                <input type="password" class="form-control required" id="branch_password" aria-describedby="emailHelp" placeholder="Enter branch password..." name="branch_password">
                <span id="error_branch_password" class="error"></span>
              </div>
              <div class="form-group">
                <label for="branch_location">Location</label>
                <input type="text" class="form-control required" id="branch_location" aria-describedby="emailHelp" placeholder="Enter branch location..." name="branch_location">
                <span id="error_branch_location" class="error"></span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary branch_submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade level" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Authorization Level</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="authorization_level">Name</label>
                <input type="text" class="form-control" id="authorization_level" aria-describedby="emailHelp" placeholder="Enter Authorization Level..." name="authorization_level">
                <span id="error_level_name" class="error"></span>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="level_person">Authorized person</label>
                </div>
                <select class="custom-select" id="level_person">
                </select>
              </div>
              <span id="error_level_person" class="error"></span>
              <div class="form-group">
                <label for="level_email">Email</label>
                <input type="email" class="form-control required" id="level_email" aria-describedby="emailHelp" placeholder="Enter email..." name="level_email">
                <span class="error error_level_email"></span>
              </div>
              <div class="form-group">
                <label for="level_password">password</label>
                <input type="password" class="form-control required" id="level_password" aria-describedby="emailHelp" placeholder="Enter password..." name="level_password">
                <span id="error_level_password" class="error"></span>
              </div>
              <div class="form-group">
                <label for="level_number">Contact number</label>
                <input type="text" class="form-control required number" id="level_number" aria-describedby="emailHelp" placeholder="Enter contact number..." name="level_number">
                <span id="error_level_number" class="error"></span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary authorization_submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade employee" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Employee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="employee_name">Name</label>
                <input type="text" class="form-control" id="employee_name" aria-describedby="emailHelp" placeholder="Enter employee name..." name="employee_name">
                <span id="error_employee_name" class="error"></span>
              </div>
              <div class="form-group">
                <label for="employee_email">Email</label>
                <input type="email" class="form-control employee_email" id="employee_email" aria-describedby="emailHelp" placeholder="Enter employee email..." name="employee_email">
                <span class="error_employee_email error"></span>
              </div>
              <div class="form-group">
                <label for="employee_password">Password</label>
                <input type="password" class="form-control" id="employee_password" aria-describedby="emailHelp" placeholder="Enter employee password..." name="employee_password">
                <span id="error_employee_password" class="error"></span>
              </div>
              <div class="form-group">
                <label for="employee_contact_number">Contact Number</label>
                <input type="text" class="form-control number" id="employee_contact_number" aria-describedby="emailHelp" placeholder="Enter contact number..." name="employee_contact_number">
                <span id="error_employee_number" class="error"></span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary employee_submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="show_branch" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">View Branch</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col" style="width: 243px">Manager</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="branch_data">
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="show_level" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">View Authorization level</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Person</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="level_data">
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="show_employee" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">View Employee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact number</th>
                  <th scope="col">Action</th>                  
                </tr>
              </thead>
              <tbody id="employee_data">
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>
  <script type="text/javascript" src="{!! asset('js/branch.js') !!}"></script>
  <script type="text/javascript" src="{!! asset('js/employee.js') !!}"></script>
  <script type="text/javascript" src="{!! asset('js/level.js') !!}"></script>
  <script type="text/javascript" src="{!! asset('js/storage.js') !!}"></script>
  <script type="text/javascript">
    $(window).on('load',function(){
      $('.loader').hide()      		
      $('form').show()
    })
  </script>
</body>
</html>
