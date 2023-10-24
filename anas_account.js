// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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