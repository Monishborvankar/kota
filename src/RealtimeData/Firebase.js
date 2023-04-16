import firebase from "firebase/compat/app";
import "firebase/compat/database";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOOSrbvdpV91A3D7rNyetjG1jyfUzBMNI",
  authDomain: "kota-35cec.firebaseapp.com",
  databaseURL: "https://kota-35cec-default-rtdb.firebaseio.com",
  projectId: "kota-35cec",
  storageBucket: "kota-35cec.appspot.com",
  messagingSenderId: "453360147250",
  appId: "1:453360147250:web:d38f5ac77f2e2e7d9a152b",
  measurementId: "G-3755X3NRD5"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
export const dataref = firebase.database();
export const storage = firebase.storage();