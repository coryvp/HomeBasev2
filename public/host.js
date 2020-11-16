(function(){
    const email    = document.getElementById('emailInput');
    if (firebase.auth.uid != null) {
        email.value = firebase.auth();
    } else {
        email.value = "Please Log In Before Posting";
    }
}());