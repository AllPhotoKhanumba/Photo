var firebaseConfig = {
    apiKey: "AIzaSyB3ZLWBoDnCsS-ZV_MN6gJlPtr6ThSwDcA",
    authDomain: "signup-d0148.firebaseapp.com",
    projectId: "signup-d0148",
    storageBucket: "signup-d0148.appspot.com",
    messagingSenderId: "626024486745",
    appId: "1:626024486745:web:73a153a808a77cf4f75e48",
    measurementId: "G-20001F4BL1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var datab = firebase.database().ref('data');

function UserRegister() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {

    }).catch(function(error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });

}
const auth = firebase.auth();

function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email, password);
    //fetching
    promise.catch(e => alert(e.msg));
    window.open("", "_self");
}
//prevent eger varsa davam etsin yoxdursa dayandirsin
//catch metodu vəd strukturunuzdakı səhvləri idarə etmək üçün 
//Promise, asinxron əməliyyatın son tamamlanmasını və ya uğursuzluğunu təmsil edən obyektdir.
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email: getId('eemail'),
        password: getId('lpassword')
    });
    alert("Əməliyyat uğurla tamamlandı!");
    console.log("sent");
    document.getElementById('form').reset();
});

function getId(id) {
    return document.getElementById(id).value;
}