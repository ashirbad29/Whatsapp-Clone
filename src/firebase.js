import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAKbAoYiAeDj7XAQkdgNhRQOA9b39bYYno',
	authDomain: 'whatsapp-clone-11.firebaseapp.com',
	databaseURL: 'https://whatsapp-clone-11.firebaseio.com',
	projectId: 'whatsapp-clone-11',
	storageBucket: 'whatsapp-clone-11.appspot.com',
	messagingSenderId: '821031505611',
	appId: '1:821031505611:web:d6fdd2a9a799d4b59ad54e',
	measurementId: 'G-002HCHPEKR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//  Data Base
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
