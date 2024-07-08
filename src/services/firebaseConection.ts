import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDV3mqQYmmkYDWp7sVSnP8HRWRL3ADMJK0",
    authDomain: "webcarros-7c407.firebaseapp.com",
    projectId: "webcarros-7c407",
    storageBucket: "webcarros-7c407.appspot.com",
    messagingSenderId: "527311700211",
    appId: "1:527311700211:web:3bbb4078ea88f2f5b3f786"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};
