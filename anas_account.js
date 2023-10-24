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

// Check if the user is authenticated and their UID matches the one provided in the URL
onAuthStateChanged(auth, (user) => {
    if (user) {
        const urlParams = new URLSearchParams(window.location.search);
        const userUid = urlParams.get('uid');

        if (user.uid === userUid) {
            // User is authenticated, and their UID matches the one provided in the URL
            // You can include code to display user-specific content here
        } else {
            // Redirect unauthorized users
            window.location.href = "index.html";
        }
    } else {
        // User is not signed in, redirect to the login page
        window.location.href = "index.html";
    }
});