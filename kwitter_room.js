// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAacR5klthEIzULWenSxA1p2AeqxmdWtFc",
      authDomain: "letschatwebapp-ed64a.firebaseapp.com",
      databaseURL: "https://letschatwebapp-ed64a-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-ed64a",
      storageBucket: "letschatwebapp-ed64a.appspot.com",
      messagingSenderId: "2520198710",
      appId: "1:2520198710:web:125e7e4528ed76bb027297"
    };
    

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();



function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}