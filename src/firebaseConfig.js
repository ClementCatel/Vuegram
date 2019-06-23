import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC-QwBxE-GE17LM3iyq4MDNi0IvEqJ8Wbk",
    authDomain: "vuegram-b75ed.firebaseapp.com",
    databaseURL: "https://vuegram-b75ed.firebaseio.com",
    projectId: "vuegram-b75ed",
    storageBucket: "",
    messagingSenderId: "743167310354",
    appId: "1:743167310354:web:2158bbb3fc43f22a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}