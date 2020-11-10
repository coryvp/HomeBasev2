(function(){

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	// var firebaseConfig = {
	// 	apiKey: "AIzaSyC6g7B4jSjPvYSj4xDk5ohpa4cb0D1Iako",
	// 	authDomain: "mocko-69e41.firebaseapp.com",
	// 	databaseURL: "https://mocko-69e41.firebaseio.com",
	// 	projectId: "mocko-69e41",
	// 	storageBucket: "mocko-69e41.appspot.com",
	// 	messagingSenderId: "987418970471",
	// 	appId: "1:987418970471:web:7593fad95e4ebe62f9c7c2"
	// };
	// Initialize Firebase
	// firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

	// get elements
	const message = document.getElementById('message');
	const write   = document.getElementById('write');
	const read	  = document.getElementById('read');
	const status  = document.getElementById('status');

	// write
	write.addEventListener('click', e => {
		console.log(firebase.auth().currentUser.uid);
		const messages = db.ref('messages');

		// simple id - ok for example, do not use in production
		const id = (new Date).getTime(); 

		// write to db
		messages.child(id).set({'message' : message.value})
			.then(function(){
				status.innerHTML = "Wrote to DB!";
			});
	});

	// read
	read.addEventListener('click', e => {
		status.innerHTML = '';
		const messages = db.ref('messages');

		messages.once('value')
		  .then(function(dataSnapshot) {
		  	var data = dataSnapshot.val();
		  	var keys = Object.keys(data);

		  	keys.forEach(function(key){
		  		console.log(data[key]);
				status.innerHTML += JSON.stringify(data[key]) + '<br>';
		  	});
		});
	});


}());