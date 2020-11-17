var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" onclick="defaultModule()">  
    <img src="hands.jpeg" width="30" height="30" class="d-inline-block align-top" alt="">
    HomeBase
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
      <a class="nav-item nav-link" href="#" onclick="loadSignIn()" >Sign In</a>
      </li>
      <li class="nav-item">
      <a class="nav-item nav-link" href="#" onclick="loadFindHousing()" >Find Housing</a>
      </li>
      <li class="nav-item">
      <a class="nav-item nav-link" href="#" onclick="loadOfferHousing()" >Offer Housing</a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarHelp" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Help
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarHelp">
      <a class="dropdown-item" href="#">Contact Us</a>
      <a class="dropdown-item" href="#">Privacy Policy</a>
      <a class="dropdown-item" href="#">Terms & Conditions</a>
      </div>
  </li>
      <li class="nav-item">
      <a class="nav-item nav-link" href="#" onclick="loadMyAccount()" >My Account</a>
      </li>
   
  </nav>    

`;

ui.default = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    HomeBase
    </div>
    <div class="card-body">
    <h5 class="card-title">Welcome to Homebase</h5>
    <p class="card-text">A centralized resource for finding and offering temporary, safe housing options in
    the aftermath of a disaster event.</p>
    </div>
    <img src="hands.jpeg" class="card-img-top" alt="Home Image">
    </div> 
`;

ui.myAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
  <form>
    <div class="form-group">
      <label for="firstName"> First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter first name">
    </div>
    <div class="form-group">
    <label for="lastName"> Last Name</label>
    <input type="text" class="form-control" id="lastName" placeholder="Enter last name">
  </div>
  <div class="form-group">
  <label for="phoneNumber"> Phone Number</label>
  <input type="number" class="form-control" id="phoneNumber" placeholder="Enter phone number">
</div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
    <label for="DOB"> Date of Birth</label>
    <input type="date" class="form-control" id="DOB" placeholder="MM/DD/YYYY">
  </div>
  <div class="form-group">
  <label for="firstName"> First Name</label>
  <input type="text" class="form-control" id="firstName" placeholder="Enter first name">
</div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password">
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-light" onclick="create()">Create account</button>
        </div>
      </div>
  </form>
</div>
</div>
`;

ui.myAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
<form>
  <div class="form-group">
    <label for="firstName"> First Name</label>
    <input type="text" class="form-control" id="firstName" placeholder="Enter first name">
  </div>
  <div class="form-group">
  <label for="lastName"> Last Name</label>
  <input type="text" class="form-control" id="lastName" placeholder="Enter last name">
</div>
<div class="form-group">
<label for="phoneNumber"> Phone Number</label>
<input type="number" class="form-control" id="phoneNumber" placeholder="Enter phone number">
</div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
  </div>
  <div class="form-group">
  <label for="DOB"> Date of Birth</label>
  <input type="date" class="form-control" id="DOB" placeholder="MM/DD/YYYY">
</div>
<div class="form-group">
<label for="firstName"> First Name</label>
<input type="text" class="form-control" id="firstName" placeholder="Enter first name">
</div>
  <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter password">
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-light" onclick="create()">Create account</button>
      </div>
    </div>
</form>
</div>
</div>
`;

ui.offerHousing = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Housing Offer</div>
<div class="card-body">
  <form>
  <div class="form-group">
    <label for="typeOfAccommodation">Type of Accommodation</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option selected>Select...</option>  
    <option>Apartment</option>
      <option>House</option>
      <option>Hotel</option>
      <option>Camping</option>
    </select>
  </div>
  <div class="form-group">
    <label for="livingSituation">Living Situation</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option selected>Select...</option>
    <option>Private quarters</option>
      <option>Shared quarters</option>
      <option>Entire accommodation</option>
    </select>
  </div>
  <div class="form-group">
      <label for="numberOfGuests"> How many guests can you host?</label>
      <input type="number" class="form-control" id="numberOfGuests" placeholder="Number of guests possible">
    </div>
    <div class="form-group">
    <label for="filters"> Filters</label>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Family friendly
      </label>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Female friendly
      </label>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Female only
      </label>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Pet friendly
      </label>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Smoking friendly
      </label>
    </div>
  </div>


    
  </form>
</div>
</div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadSignIn = function(){
    target.innerHTML = '<object type="text/html" data="../login.html" ></object>';
};

var loadFindHousing = function(){
    target.innerHTML = '<object type="text/html" data="../database.html" ></object>';
};

var loadOfferHousing = function(){
    target.innerHTML = '<object type="text/html" data="../host.html" ></object>';
};

var loadMyAccount = function(){
    target.innerHTML = ui.myAccount;
};


var defaultModule = function(){
    target.innerHTML = ui.default;
};


defaultModule();
