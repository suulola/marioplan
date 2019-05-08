import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0nLOaYMwv0epD_3sMUm1ED5_NgjWieSY",
  authDomain: "react-marioplan-188d8.firebaseapp.com",
  databaseURL: "https://react-marioplan-188d8.firebaseio.com",
  projectId: "react-marioplan-188d8",
  storageBucket: "react-marioplan-188d8.appspot.com",
  messagingSenderId: "965767692732",
  appId: "1:965767692732:web:0c44c991049a7c6c"
};
firebase.initializeApp(firebaseConfig)
//firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase