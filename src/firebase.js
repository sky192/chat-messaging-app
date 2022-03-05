import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyDMzUB1czZmm0uwd0Mh6wFt6QEl3eFp5gg",
        authDomain: "metagram-5c740.firebaseapp.com",
        projectId: "metagram-5c740",
        storageBucket: "metagram-5c740.appspot.com",
        messagingSenderId: "182848159676",
        appId: "1:182848159676:web:cbea5ad722e259df3775b9",
    })
    .auth();
