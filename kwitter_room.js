// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvcdSRd8Q9kQlTJkWphKBd6pQ78raTn1s",
  authDomain: "kwitter-ef479.firebaseapp.com",
  databaseURL: "https://kwitter-ef479-default-rtdb.firebaseio.com",
  projectId: "kwitter-ef479",
  storageBucket: "kwitter-ef479.appspot.com",
  messagingSenderId: "20857104618",
  appId: "1:20857104618:web:49ab1e4372ac2d2f4a4f93"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome back " + user_name + ", <br> start exchanging experiences with others!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
      console.log("Room Name -"+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectTORoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("rrom_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.romoveItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
