// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQLc54eUpd37mv0j8BvqiN8NBewP1SEvY",
    authDomain: "rewards-p.firebaseapp.com",
    projectId: "rewards-p",
    storageBucket: "rewards-p.appspot.com",
    messagingSenderId: "940514628130",
    appId: "1:940514628130:web:974ddac0fb31f94386307b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Define your login function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Determine the appropriate account page based on user's email
            if (email === "darkshadowplayz1@gmail.com") {
                window.location.href = `omar_account.html?uid=${userCredential.user.uid}`;
            } else if (email === "anas.mabdelmegid@hotmail.com") {
                window.location.href = `anas_account.html?uid=${userCredential.user.uid}`;
            } else {
                alert("Invalid email or password");
            }
        })
        .catch((error) => {
            alert("Invalid email or password: " + error.message);
        });
}