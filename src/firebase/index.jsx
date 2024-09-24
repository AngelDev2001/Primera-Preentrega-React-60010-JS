import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt9peh39Y_OBssoiaOCqZiNx6Lq-xXq_I",
  authDomain: "proyecto-react-6cdbb.firebaseapp.com",
  projectId: "proyecto-react-6cdbb",
  storageBucket: "proyecto-react-6cdbb.appspot.com",
  messagingSenderId: "736313603559",
  appId: "1:736313603559:web:3558ef186d4f976bc1f942",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
