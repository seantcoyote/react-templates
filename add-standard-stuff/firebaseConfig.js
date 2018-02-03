import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  // Get data from Firebase control panel
}

export const fb = firebase.initializeApp(config)
export const db = firebase.firestore()
