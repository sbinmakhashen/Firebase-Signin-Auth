import firebase from 'firebase';
// app config
const firebaseConfig = {
  apiKey: 'AIzaSyD1MPINeeGlecE_UNt9wWhNe_m33rgiJUo',
  authDomain: 'user-auth-dev-e8bb2.firebaseapp.com',
  projectId: 'user-auth-dev-e8bb2',
  storageBucket: 'user-auth-dev-e8bb2.appspot.com',
  messagingSenderId: '978542325890',
  appId: '1:978542325890:web:21df68ecc4c0dc9ac7849b',
  measurementId: 'G-QYDC867V1Y',
};
// initialize configured app
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
