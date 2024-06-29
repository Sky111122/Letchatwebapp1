
/*
const firebaseConfig = {
    apiKey: "AIzaSyA34g_aEO7pTOR2MKfa679WaEq6ubNtB3s",
    authDomain: "letschat-webapp2.firebaseapp.com",
    projectId: "letschat-webapp2",
    storageBucket: "letschat-webapp2.appspot.com",
    messagingSenderId: "348990570747",
    appId: "1:348990570747:web:9c939087c03f89c55fb05e",
    measurementId: "G-MP13EMVVBC"
    };
*/
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE

function addRoom() {
    // get room from texbox
    let room_name = document.getElementById("room_name").value;

    // add room to local storage
    localStorage.setItem("room_name", room_name);

    // add room to database
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
                //End code
            });
        }
    );

    var getUserName = localStorage.getItem("userName");
    var aDiv = document.getElementsByClassName("SignInName")[0];
    aDiv.innerHTML = 'Welcome' + getUserName;
}
    
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
