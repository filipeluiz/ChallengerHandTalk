import firebase from 'firebase'

export const firebaseConfig = {
  //TODO insira aqui suas credenciais firebase
  apiKey: "AIzaSyCG0MQ2tmLAEp8DHUP9MgzJkzD9Iy6YLPc",
  authDomain: "challangerhandtalk.firebaseapp.com",
  projectId: "challangerhandtalk",
  storageBucket: "challangerhandtalk.appspot.com",
  messagingSenderId: "660413992927",
  appId: "1:660413992927:web:2fb4c14bedecb7c4e6be6a",
  measurementId: "G-2361SJT4WE"
}

const app = firebase.initializeApp(firebaseConfig)

export const fbFirestore = app.firestore()
export const fbStorage = app.storage()
