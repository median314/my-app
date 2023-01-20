import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCcOVC1paRKPR0xXeqH6NhW-QL1Tb5hHm0",
    authDomain: "belajar-simplenote.firebaseapp.com",
    projectId: "belajar-simplenote",
    storageBucket: "belajar-simplenote.appspot.com",
    messagingSenderId: "673231447644",
    appId: "1:673231447644:web:3261fc88a4dec58232e899",
    measurementId: "G-BJDT2DQM2H"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)
  export const auth = getAuth(app)
  export const storage = getStorage(app)