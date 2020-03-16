import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyD72Cu1BT5uskctrhsTIMfbYkIWi-Zldv4",
    authDomain: "ongoing-researches.firebaseapp.com",
    databaseURL: "https://ongoing-researches.firebaseio.com",
    projectId: "ongoing-researches",
    storageBucket: "ongoing-researches.appspot.com",
    messagingSenderId: "901998402558",
    appId: "1:901998402558:web:164450ee83db25c8e0beaf",
    measurementId: "G-91DDCZJ60E"
}

firebase.initializeApp(config)

