var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onclick="defaultModule()">
            <img src="hands.jpeg" width="30" height="30" class="d-inline-block align-top" alt="">
            HomeBase
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#" onclick="defaultModule()">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarFindHousing" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Find Housing
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarFindHousing">
                    <a class="dropdown-item" href="#">Search</a>
                    <a class="dropdown-item" href="#">Select Housing Option</a>
                    <a class="dropdown-item" href="#">Register</a>
                    <a class="dropdown-item" href="#">Book</a>
                </div>
            </li>
            <li class="nav-item">
      <a class="nav-item nav-link" href="#" onclick="loadFindHousing()" >Find Housing</a>
      </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarBecomeHost" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Become a Host
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarBecomeHost">
                <a class="dropdown-item" href="#" onclick="loadRegister()">Register</a>
                <a class="dropdown-item" href="#">My Account</a>
                </div>
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
                <a class="nav-link" href="#" onclick="loadSignIn()">Sign In</a>
            </li>
            </ul>
        </div>
    </nav>
`;

ui.default = `

<div>
<style>
h1 {text-align: center;
padding-top: 5rem;}

p {text-align: center;
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">}
div {text-align: center;}
</style>
<h1>Welcome to HomeBase</h1>
  <p>We are centralized resource for finding and offering temporary, safe housing options in the aftermath of a disaster event.</p>
  <img src="Picture 1.png" alt="Hands making house" width="350" height="260">

</div>

`;

ui.findHousing = `


    <div class='flex-parent viewport-full relative scroll-hidden'>
        <div class='flex-child w-full w360-ml absolute static-ml left bottom'>
            <div class='flex-parent flex-parent--column viewport-third bg-white'>
                <div class='flex-child flex-child--grow'>
                    <div id="sidebarA"
                        class="flex-parent flex-parent--column-ml flex-parent--center-main theme py12 px12 ">
                        <h3 id='title' class='txt-l-ml txt-m txt-bold mb6 mr0-ml mr24 align-center block'>
                        </h3>
                        <p id='description' class='txt-s py12 none block-ml'>
                        </p>
                        <div class="flex-parent flex-parent--center-main relative-ml absolute right top mt0-ml mt6">
                            <button id='filterResults' class='txt-bold btn btn--stroke mr0-ml mr12 px18-ml px6'>
                                <svg class='icon inline-block align-middle h24 w24'>
                                    <use xlink:href='#icon-filter' /></svg>
                                <p class="inline-block-ml align-middle remove none">Show Filters</p>
                            </button>
                        </div>


                    </div>
                    <div id="listings" class="flex-child viewport-twothirds py12 px12 listings scroll-auto"></div>

                </div>
            </div>
        </div>
        <div class='flex-child flex-child--grow w-auto viewport-full-ml viewport-twothirds' id='map'>

        </div>

        <div id='modal'
            class='absolute top right bottom left scroll-auto hide-visually flex-parent flex-parent--center-main mt120-ml'>
            <div class='pt36'>
                <div class='flex-child bg-white round relative scroll-auto'>
                    <button id='exitButton' class='absolute top right px12 py12'>
                        <svg class='icon link color-darken50'>
                            <use xlink:href='#icon-close'></use>
                        </svg>
                    </button>
                    <div class='px24 py24'>
                        <form id="filters"></form>
                        <div class='align-center py12'></div>
                        <div class="flex-parent flex-parent--center-main">
                            <button id="removeFilters" class="btn">Reset Filters</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>

    </div>

`;


var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadFindHousing = function(){
    target.innerHTML = ui.findHousing;
    loadMaps();
  };

var loadSignIn = function(){
    target.innerHTML = '<object type="text/html" data="../login.html" ></object>';
};

var loadRegister = function(){
    target.innerHTML = '<object type="text/html" data="../database.html" ></object>';
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
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
