user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome"+user_name;

var firebaseConfig = {
      apiKey: "AIzaSyDtAxP_Td6clXimzFa6_0OyDoVeYLoAm8Q",
      authDomain: "livecha123-d18a1.firebaseapp.com",
      databaseURL: "https://livecha123-d18a1-default-rtdb.firebaseio.com",
      projectId: "livecha123-d18a1",
      storageBucket: "livecha123-d18a1.appspot.com",
      messagingSenderId: "165648382886",
      appId: "1:165648382886:web:542a62448d52c5d5db6d67"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class ='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Add Room Name"
      });

      localStorage.setItem("room_Name", room_name);

      window.location = "chatting_cool.html";
}

function redirectToRoomName(room) {
      console.log(room);
      localStorage.setItem("room_name", room);
      window.location = "chatting_cool.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_Name");
       window.location = "index.html";     
}