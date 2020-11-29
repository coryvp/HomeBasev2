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
        </div>
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
        <div class="card-header">My Account</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter email" readonly>
                </div>
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
                    <label for="DOB"> Date of Birth</label>
                    <input type="date" class="form-control" id="DOB" placeholder="MM/DD/YYYY">
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-light" onclick="create()">Update account</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
`;

ui.LoggedOut = `
    <div class="card text-white bg-secondary mb-3" style="width: 18rem;">
        <div class="card-header">
            User Error
        </div>
        <div class="card-body">
            <form>
                <h5 class="card-title">No User Logged In</h5>
                <p class="card-text">Please sign in to use HomeBase</p>
                <img src="hands.jpeg" class="card-img-top" alt="Home Image">
                <p class="card-text"></p>
                <button type="submit" class="btn btn-light" onclick="loadSignIn()">Sign In</button>
            </form>
        </div>
        

    </div> 
`;


ui.Login = `

    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Sign In</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                   <!-- <label for="email">Email Address</label> -->
                    <input type="email" class="form-control" id="email" placeholder="Enter email address">
                </div>
                <div class="form-group">
                    <!--<label for="password">Password</label> -->
                    <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
                <button type="submit" class="btn btn-light" id="login">Login</button>
                <button type="submit" class="btn btn-light" id="signup">SignUp</button>
                <button type="submit" class="btn btn-light" id="logout" style="display:none;">Logout</button>
            </form>
            <div id = "status"></div> 

        </div>
    </div>




    <!--
    <input id="email" type="email" placeholder="Email"><br>
    <input id="password" type="password" placeholder="Password"><br><br>
    <button id="login">Login</button>
    <button id="signup">SignUp</button>
    <button id="logout" style="display:none;">Logout</button>
    -->
`; 

ui.OfferHousing=`
<head>
<meta charset="utf-8" />
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
<style>
    body { margin: 0; padding: 0; }
    #map { height: 300px; width: 300px;}
</style>
</head>

<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Housing Offer</div>
<div class="card-body">
  <form>
    <div class="form-group">  
      <label for="emailInput">Email Address/User Name</label>
      <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" readonly>
    </div>
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
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Family friendly
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck2">
        <label class="form-check-label" for="gridCheck2">
          Female friendly
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck3">
        <label class="form-check-label" for="gridCheck3">
          Female only
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck4">
        <label class="form-check-label" for="gridCheck4">
          Pet friendly
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck5">
        <label class="form-check-label" for="gridCheck5">
          Smoking friendly
        </label>
      </div>
    </div>

    <div class="form-row">
      <label for="lengthOfStay">How long can you host?</label>
      <div class="form-group col-md-6">
        <input type="number" class="form-control" placeholder="Number">
      </div>
      <div class="form-group col-md-6">
        <select class="form-control" id="units">
          <option selected>Units...</option>
          <option>Days</option>
          <option>Weeks</option>
          <option>Months</option>
        </select>  
      </div>
      <!---
      <div class="form-group">  
        <label for="emailInput">Email Address/User Name</label>
        <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" readonly>
      </div>
      <div class="form-group">  
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" placeholder="Enter password">
      </div>
      --->
      <div id="map"></div>
      <button type="submit" class="btn btn-light" onclick="post()">Post</button>
      <button type="button" class="btn btn-light" onclick="fake()">Fake</button>   
    </div>
  </form>
</div>
</div>


<body>
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"></script>
  <link
      rel="stylesheet"
      href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css"
      type="text/css"
  />
  <!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->
  <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
  <style>
  #geocoder-container > div {
      min-width: 50%;
      margin-left: 25%;
  }
  </style>
   
  <script>
      mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcnJ5IiwiYSI6ImNrZmVmd3hkbDA0aWEyeXRqaGpxbDBzNWsifQ.bIHGogBJUCCaraWEZv8KHA';
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-79.4512, 43.6568],
          zoom: 13
      });
   
      var geocoder = new MapboxGeocoder({
          placeholder: 'Enter Location Address',
          accessToken: mapboxgl.accessToken,
          marker: {
          color: 'orange'
          },
          mapboxgl: mapboxgl
      });
   
      map.addControl(geocoder);

      map.on('load', function () {
          // Listen for the geocoder.input event that is triggered when a user
          // makes a selection
          geocoder.on('result', function (ev) {
          console.log(ev.result.center);
          });
    });
  </script>

  <script>
      function fake(){
          var user = firebase.auth().currentUser;
          var db = firebase.database();
          var id = user.uid;
          var postRef = db.ref('users/' + id + '/postings');
          
          

          if (user) {
              console.log(user.email);
              var newPostRef = postRef.push();
              newPostRef.set({
                latitude : faker.address.latitude(),
                longitude : faker.address.longitude()                  
              })
          }
          
      }
      
      const email    = document.getElementById('emailInput');

      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              email.placeholder = user.email;
              email.value = user.email;
          } else {
              email.placeholder = "Please Log In Before Posting";
          }
      });
  </script>
   
  </body>`



var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadSignIn = function(){
    //replacing login.html to enable transition from SignUp button to MyAccount page 16Nov amm
    target.innerHTML = ui.Login; //'<object type="text/html" data="../login.html" ></object>';

    //replacing login.html and login.js inline to enable transition from SignUp button to MyAccount page 16Nov amm
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const login    = document.getElementById('login');
    const signup   = document.getElementById('signup');
    const logout   = document.getElementById('logout');

   /*  // login
    login.addEventListener('click', e => {
        const auth  = firebase.auth();		
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => console.log(e.message));
    });

    // signup
    signup.addEventListener('click', e => {
        // TODO: check for real email
        const auth  = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
        promise.catch(e => console.log(e.message));
        loadMyAccount();  //amm 16nov load my account page after signup 
    });

    // logout
    logout.addEventListener('click', e => {
        firebase.auth().signOut();
    }); */

    // login state
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    email.placeholder = user.email;
                    email.value = user.email;
                } else {
                    email.placeholder = "Please Log In Before Updating Account!";
                }
            });
            logout.style.display = 'inline';
            login.style.display  = 'none';
            signup.style.display = 'none';
            password.style.display = 'none';

            logout.addEventListener('click', e => {
                firebase.auth().signOut();
            });
        }
        else{

            console.log('User is not logged in');
            logout.style.display = 'none';			
            login.style.display  = 'inline';
            signup.style.display = 'inline';

        
            // login
            login.addEventListener('click', e => {
                const auth  = firebase.auth();		
                const promise = auth.signInWithEmailAndPassword(email.value, password.value);
                promise.catch(e => console.log(e.message));
            });
        
            // signup
            signup.addEventListener('click', e => {
                // TODO: check for real email
                const auth  = firebase.auth();
                const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
                promise.catch(e => console.log(e.message));
                loadMyAccount();  //amm 16nov load my account page after signup 
            });
        }
    });
    
    

};

var loadRegister = function(){
    target.innerHTML = '<object type="text/html" data="../database.html" ></object>';
};

var loadOfferHousing = function(){

    // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
            console.log(firebaseUser);
            
            target.innerHTML = ui.OfferHousing;
		}
		else{
            console.log('User is not logged in');
            target.innerHTML = ui.LoggedOut;
		}
	});

   
};

var loadMyAccount = function(){
  
    // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
            console.log(firebaseUser);
            
            target.innerHTML = ui.myAccount;
            const email    = document.getElementById('emailInput');
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    email.placeholder = user.email;
                    email.value = user.email;
                } else {
                    email.placeholder = "Please Log In Before Updating Account!";
                }
            });
		}
		else{
            console.log('User is not logged in');
            target.innerHTML = ui.LoggedOut;
		}
	});
    

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
