// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyADB2eB_nS14RB4DN3R2EXsmc7oE5MQCFQ",
  authDomain: "kwitter-ec3ca.firebaseapp.com",
  databaseURL: "https://kwitter-ec3ca-default-rtdb.firebaseio.com",
  projectId: "kwitter-ec3ca",
  storageBucket: "kwitter-ec3ca.appspot.com",
  messagingSenderId: "31845928568",
  appId: "1:31845928568:web:a1cd678437122ea969e78d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitterpg.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
