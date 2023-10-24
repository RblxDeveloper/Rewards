// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQLc54eUpd37mv0j8BvqiN8NBewP1SEvY",
    authDomain: "rewards-p.firebaseapp.com",
    projectId: "rewards-p",
    storageBucket: "rewards-p.appspot.com",
    messagingSenderId: "940514628130",
    appId: "1:940514628130:web:974ddac0fb31f94386307b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Check if the user is authenticated and their UID matches the one provided in the URL
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Check if the user's UID matches the provided UID in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const userUid = urlParams.get('uid');
        if (user.uid === userUid) {
            // User is authenticated and the URL matches their UID
            // Include code to display user-specific content here
            // ...

            // If you want to display an overlay for unauthorized users
            // you can add the following lines

            // Check if the user is unauthorized (different from Anas or Omar)
            const email = user.email;
            if (email !== "darkshadowplayz1@gmail.com" && email !== "anas.mabdelmegid@hotmail.com") {
                // Show the overlay for unauthorized access
                document.getElementById("overlay").style display = "block";
            }
        } else {
            // Redirect to the login page or display an error message
            window.location.href = "index.html"; // Redirect unauthorized users
        }
    } else {
        // User is not signed in, redirect to the login page
        window.location.href = "index.html";
    }
});