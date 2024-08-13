import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBtb3jPzMVa_EyKYSIIlFixiRXlYplpaHQ",
    authDomain: "webcarros-5515c.firebaseapp.com",
    projectId: "webcarros-5515c",
    storageBucket: "webcarros-5515c.appspot.com",
    messagingSenderId: "463919932155",
    appId: "1:463919932155:web:e1e9f3c38c5a50210b865e"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
