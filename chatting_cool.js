var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_Name");

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
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
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
        like: 0
    });

    document.getElementById("msg").value = "";
}

function logouut(){
    localStorage.removeItem("user-name");
    localStorage.removeItem("room_Name");
     window.location = "index.html";     
}