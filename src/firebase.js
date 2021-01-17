import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBVK4A_rmIzN9kotmgKpf6cKAk6RrtlkSk",
    authDomain: "xsersize-5658d.firebaseapp.com",
    projectId: "xsersize-5658d",
    storageBucket: "xsersize-5658d.appspot.com",
    messagingSenderId: "585696709656",
    appId: "1:585696709656:web:5e6701e2e8ea37bd3fc76d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase