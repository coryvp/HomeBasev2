var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onclick="defaultModule()">HomeBase</a>
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
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarBecomeHost" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Become a Host
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarBecomeHost">
                <a class="dropdown-item" href="#">Register</a>
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

ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
        <form>
            <div class="form-group">
            <label for="nameInput">Name</label>
            <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter name">
            </div>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-light" onclick="create()">Create Account</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.login = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-light" onclick="login()">Login</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.deposit = `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="amountInput">Amount</label>
            <input type="number" class="form-control" id="amountInput" aria-describedby="amountHelp" placeholder="Enter amount">
            </div>
            <button type="submit" class="btn btn-light" onclick="deposit()">Deposit</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.withdraw = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="amountInput">Amount</label>
            <input type="number" class="form-control" id="amountInput" aria-describedby="amountHelp" placeholder="Enter amount">
            </div>
            <button type="submit" class="btn btn-light" onclick="withdraw()">Withdraw</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
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
    <img src="home.png" class="card-img-top" alt="Home Image">
    </div> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadSignIn = function(){
    target.innerHTML = '<object type="text/html" data="../login.html" ></object>';
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
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
