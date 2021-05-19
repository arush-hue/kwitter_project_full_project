//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          Name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       //start code
       console.log(firebase_message_id);
       console.log(message_data);
       Name=message_data['Name'];
       message=message_data['message'];
       like=message_data['like'];
       name_with_tag="<h4>"+Name+"<img src='tick.png' class='user_tick'></h4>";
       message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
       like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='getLikes(this.id)'>";
       span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
       row= name_with_tag+message_with_tag+like_button+span_tag;
       document.getElementById("output").innerHTML+=row;
       //end code
    } });  }); }
getData();
function getLikes(message_id)
{
    console.log("clicked on like button"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes
    });
}
function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}