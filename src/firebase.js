import firebase from 'firebase'

const firebaseConfig = {
apiKey: "AIzaSyAted2Aym06m5F-2l6bxRPMxfYPlxPIVT8",
authDomain: "disneyplus-clone-90174.firebaseapp.com",
projectId: "disneyplus-clone-90174",
storageBucket: "disneyplus-clone-90174.appspot.com",
messagingSenderId: "878430263803",
appId: "1:878430263803:web:59ff89a73d947e666ed35e",
measurementId: "G-C7KJW99JY4"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

