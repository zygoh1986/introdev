// import firebase from 'firebase/app'
// import 'firebase/auth'
// import "firebase/firestore"
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAt7f8tedZPATupmg6dC0BfNvIwNuGXR5g",
  authDomain: "barcode-50dd3.firebaseapp.com",
  databaseURL: "https://barcode-50dd3.firebaseio.com",
  projectId: "barcode-50dd3",
  storageBucket: "barcode-50dd3.appspot.com",
  messagingSenderId: "416988475412",
}

firebase.initializeApp(firebaseConfig)


export default firebase;