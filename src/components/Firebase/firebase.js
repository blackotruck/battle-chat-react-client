import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDgCFbiVuCC7qii3TLDgrFRod4uyMx0SPs",
  authDomain: "battle-chat-12a67.firebaseapp.com",
  databaseURL: "https://battle-chat-12a67.firebaseio.com",
  projectId: "battle-chat-12a67",
  storageBucket: "battle-chat-12a67.appspot.com",
  messagingSenderId: "509772477178",
  appId: "1:509772477178:web:7107026710a0664b894f43",
  measurementId: "G-GL2ZVSZBP8"
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)
  }

  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return  firebase.auth().signInWithPopup(provider)
  }

  signOut = () => firebase.auth().signOut()
}
export default Firebase