import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCeb4bQlb8rXqCKfnzMPeMoqe_13DTGGPA',
    authDomain: 'signal-clone-4d38c.firebaseapp.com',
    projectId: 'signal-clone-4d38c',
    storageBucket: 'signal-clone-4d38c.appspot.com',
    messagingSenderId: '497180688462',
    appId: '1:497180688462:web:5994285f84da713822031f',
}

let app

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
} //stops reinitialising app for every launch

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
