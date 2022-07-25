import { initializeApp} from 'firebase/app';
import { getFirestore,  } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHz0meJlBkDAPJsWZtysITwEEZP0Z0lkE",
    authDomain: "hookwall-337621.firebaseapp.com",
    projectId: "hookwall-337621",
    storageBucket: "hookwall-337621.appspot.com",
    messagingSenderId: "751673437998",
    appId: "1:751673437998:web:965606366633a3e9dc14bf",
    measurementId: "G-LVFWM31GPY"
  };
  
  const FirebaseApp =initializeApp(firebaseConfig)
  const db = getFirestore(FirebaseApp);
  const auth =getAuth(FirebaseApp);

  export  {db,auth };
  