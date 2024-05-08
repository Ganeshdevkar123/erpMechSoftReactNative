
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBpmGoRn-FtCE0etQXjHZRjGEEeRH0PxoA",
    authDomain: "clone-crud-app.firebaseapp.com",
    projectId: "clone-crud-app",
    storageBucket: "clone-crud-app.appspot.com",
    messagingSenderId: "525499960075",
    appId: "1:525499960075:web:28a9b5625f8a76e83bb00e",
    measurementId: "G-6M92H6KFSY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  export default firebase;