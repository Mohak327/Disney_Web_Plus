import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAted2Aym06m5F-2l6bxRPMxfYPlxPIVT8",
authDomain: "disneyplus-clone-90174.firebaseapp.com",
projectId: "disneyplus-clone-90174",
storageBucket: "disneyplus-clone-90174.appspot.com",
messagingSenderId: "878430263803",
appId: "1:878430263803:web:59ff89a73d947e666ed35e",
measurementId: "G-C7KJW99JY4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;