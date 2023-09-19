import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDy3uXpnqit7_xvsgvsx7P2xvLE2UUgsCE",
    authDomain: "drive-7c6db.firebaseapp.com",
    projectId: "drive-7c6db",
    storageBucket: "drive-7c6db.appspot.com",
    messagingSenderId: "910344681117",
    appId: "1:910344681117:web:6a32b8d9ef87a590c34674"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth }; 
export default app;
