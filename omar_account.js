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
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Check if the user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        // Check if the user's UID matches the provided UID in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const userUid = urlParams.get('uid');
        if (user.uid === userUid) {
            // User is authenticated and the URL matches their UID
            // You can remove the code below if you don't want to display the username
            const userRef = ref(getDatabase(), 'users/' + user.uid);
            get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const username = snapshot.val().username;
                    document.getElementById("usernameDisplay").innerText = username;
                }
            }).catch((error) => {
                console.error("Error getting user data:", error);
            });
        } else {
            // Redirect to the login page or display an error message
            window.location.href = "index.html"; // Redirect unauthorized users
        }
    } else {
        // User is not signed in, redirect to the login page
        window.location.href = "index.html";
    }
});