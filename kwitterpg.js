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
room_name = localStorage.getItem("room_name");

function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
        }
      });
    });
}
getData();

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}
