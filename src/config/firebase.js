import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBGTa5_O-w8vvDEmHSoxw4gTVzsD6KKAP4",
    authDomain: "revents-course-bbf6d.firebaseapp.com",
    projectId: "revents-course-bbf6d",
    storageBucket: "revents-course-bbf6d.appspot.com",
    messagingSenderId: "609400107370",
    appId: "1:609400107370:web:3f5fea5fdf7921968b3513"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;