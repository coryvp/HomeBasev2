(function(){
    const email    = document.getElementById('emailInput');
    if (firebase.auth.uid != null) {
        email.placeholder = firebase.auth();
        email.value = firebase.auth();
    } else {
        email.placeholder = "Please Log In Before Posting";
    }
}());