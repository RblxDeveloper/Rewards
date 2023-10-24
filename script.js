// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQLc54eUpd37mv0j8BvqiN8NBewP1SEvY",
    authDomain: "rewards-p.firebaseapp.com",
    projectId: "rewards-p",
    storageBucket: "rewards-p.appspot.com",
    messagingSenderId: "940514628130",
    appId: "1:940514628130:web:974ddac0fb31f94386307b"
};

firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to the appropriate account page, passing the user's UID as a URL parameter
            window.location.href = `omar_account.html?uid=${userCredential.user.uid}`;
        })
        .catch((error) => {
            alert("Invalid email or password: " + error.message);
        });
}