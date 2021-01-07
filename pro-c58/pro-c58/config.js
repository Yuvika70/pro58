import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC88-es7TpAqWYme4E3oyMNRKlaN3RyYMU",
  authDomain: "buzzerapp-310d3.firebaseapp.com",
  databaseURL: "https://buzzerapp-310d3-default-rtdb.firebaseio.com",
  projectId: "buzzerapp-310d3",
  storageBucket: "buzzerapp-310d3.appspot.com",
  messagingSenderId: "488300877713",
  appId: "1:488300877713:web:a01f5caaa7a10804216c30"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
