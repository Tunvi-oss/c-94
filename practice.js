
var firebaseConfig = {
    apiKey: "AIzaSyBUO6Cqvi9ykXSDN-Ya71eSLvM1gURkin0",
    authDomain: "kwitter-77cfa.firebaseapp.com",
    databaseURL: "https://kwitter-77cfa-default-rtdb.firebaseio.com",
    projectId: "kwitter-77cfa",
    storageBucket: "kwitter-77cfa.appspot.com",
    messagingSenderId: "463759310359",
    appId: "1:463759310359:web:51bbad45c297372fcca652",
    measurementId: "G-MJX44JPW58"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        rose:"Hi my name is Tanvi"
});
}