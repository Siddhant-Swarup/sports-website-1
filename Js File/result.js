// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7hT0tHLl0qOPxRU9k0DdrqCz0KOM37sw",
    authDomain: "database-b8ffb.firebaseapp.com",
    databaseURL: "https://database-b8ffb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-b8ffb",
    storageBucket: "database-b8ffb.appspot.com",
    messagingSenderId: "1015425565984",
    appId: "1:1015425565984:web:4782b90e2dbd23bb254345"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var selection = document.querySelector('select');

var temp, value=0;
selection.addEventListener('change', () => {
    temp = selection.options[selection.selectedIndex].text;
    value = parseInt(temp);
    console.log(value)
    readResult(value);
    
});

function readResult(value) {
    var result=firebase.database().ref().child(value);
    result.on('value',(data) => {
        
        console.log(data.val())
        document.getElementById('Object').innerHTML="Loading";
        document.getElementById("Object").innerHTML= data.val();
    });
    
}


