
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDu6N5BWyG8ydE0o-5b1Q2Rrkc6Er6YYek",
    authDomain: "databas2-3e2e5.firebaseapp.com",
    databaseURL: "https://databas2-3e2e5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "databas2-3e2e5",
    storageBucket: "databas2-3e2e5.appspot.com",
    messagingSenderId: "1025506697785",
    appId: "1:1025506697785:web:3013987806039f42aee3e8"
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
    result.on('value',snap => {
        console.log(snap.val());
        document.getElementById('Object').innerText=snap.val();
    });
    
}




