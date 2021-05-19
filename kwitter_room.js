
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBaznN1maCTFKXZYs0sIY4UO9ytkpuNQdA",
  authDomain: "kwitter-project-70f27.firebaseapp.com",
  databaseURL: "https://kwitter-project-70f27-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-70f27",
  storageBucket: "kwitter-project-70f27.appspot.com",
  messagingSenderId: "102734594714",
  appId: "1:102734594714:web:478adaff4a69ef30929523"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("color").innerHTML="Welcome "+ username +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room_name="+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='simpleName(this.id)'>#"+Room_names+"</div><hr>";
  console.log(row);
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();
function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"hello"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function simpleName(simple)
{
  console.log(simple);
  localStorage.setItem("room_name",simple);
  window.location="kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html"
}