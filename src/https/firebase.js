import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHU0ObNr9dnYWOOktu-UTLxtDSodT64DU",
  authDomain: "landing-page-dd637.firebaseapp.com",
  projectId: "landing-page-dd637",
  storageBucket: "landing-page-dd637.appspot.com",
  messagingSenderId: "1076255217354",
  appId: "1:1076255217354:web:50672d50e7d024d8374633",
  measurementId: "G-JVJREZBGTM"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

export default firebaseApp;

