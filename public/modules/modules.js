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
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <a class="nav-item nav-link" href="#" onclick="loadSignIn()" >Sign In</a>
      <a class="nav-item nav-link" href="#" onclick="loadFindHousing()" >Find Housing</a>
      <a class="nav-item nav-link" href="#" onclick="loadOfferHousing()" >Offer Housing</a>
      <a class="nav-item nav-link" href="#" onclick="loadMyAccount()" >My Account</a>
    </div>
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
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
