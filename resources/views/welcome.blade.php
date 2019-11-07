<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{!! asset('css/bootstrap.min.css') !!}">
  <link rel="stylesheet" href="{!! asset('css/jquery.steps.css') !!}">
  <script src="{!! asset('js/jquery.min.js') !!}"></script>
  <script src="{!! asset('js/popper.min.js') !!}"></script>
  <script src="{!! asset('js/bootstrap.min.js') !!}"></script>
  <script src="{!! asset('js/jquery.steps.min.js') !!}"></script>
  <script src="{!! asset('js/jquery.validate.min.js') !!}"></script>
  <style type="text/css">
    .error{
      color: red;
    }
  </style>
</head>
<body>

  <form id="example-form" action="#">
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
              <input type="text" class="form-control required" name="contact_number" id="contact_number" placeholder="phone number....." title="enter your phone number">
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
                <span id="error_branch_email" class="error"></span>
              </div>
              <div class="form-group">
                <label for="branch_password">password</label>
                <input type="text" class="form-control required" id="branch_password" aria-describedby="emailHelp" placeholder="Enter branch password..." name="branch_password">
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
                <input type="email" class="form-control" id="employee_email" aria-describedby="emailHelp" placeholder="Enter employee email..." name="employee_email">
                <span id="error_employee_email" class="error"></span>
              </div>
              <div class="form-group">
                <label for="employee_password">Password</label>
                <input type="password" class="form-control" id="employee_password" aria-describedby="emailHelp" placeholder="Enter employee password..." name="employee_password">
                <span id="error_employee_password" class="error"></span>
              </div>
              <div class="form-group">
                <label for="employee_contact_number">Contact Number</label>
                <input type="text" class="form-control" id="employee_contact_number" aria-describedby="emailHelp" placeholder="Enter contact number..." name="employee_contact_number">
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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">name</th>
                  {{-- <th scope="col">manager</th> --}}
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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">name</th>
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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
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
  <script type="text/javascript" src="{!! asset('js/storage.js') !!}"></script>
</body>
</html>
