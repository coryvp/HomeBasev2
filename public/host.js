(function(){
    const email    = document.getElementById('emailInput');
    if (firebase.auth() != null) {
        email.placeholder = firebase.auth().email;
        email.value = firebase.auth().email;
    } else {
        email.placeholder = "Please Log In Before Posting";
    }
}());