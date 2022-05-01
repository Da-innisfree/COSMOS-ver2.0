import firebase from 'firebase/compat/app';
//import { initializeApp, auth, storage,  firestore} from 'firebase/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB9CupEqtWnIKq9JP6-74M6V6h9dqXcByA",
  authDomain: "cosmos-v2-51c3f.firebaseapp.com",
  projectId: "cosmos-v2-51c3f",
  storageBucket: "cosmos-v2-51c3f.appspot.com",
  messagingSenderId: "1033739127605",
  appId: "1:1033739127605:web:f8e029ecf283dd23e3da7c",
  measurementId: "G-PF234SSBZ6"
};
// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_FB_AK,
//   authDomain: process.env.VUE_APP_FB_DOMAIN,
//   projectId: process.env.VUE_APP_FB_PID,
//   storageBucket: process.env.VUE_APP_FB_SB,
//   messagingSenderId: process.env.VUE_APP_FB_SID,
//   appId: process.env.VUE_APP_FB_AID,
// };

firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();

if (!firebaseAuth.currentUser) {
  firebaseAuth
    .signInAnonymously(firebaseAuth)
    .then(() => {
      console.log('FB signed in anonymously');
    })
    .catch(error => {
      console.error(error);
    });
}

// if (!firebaseAuth.currentUser) {
//   // firebaseAuth.signInAnonymously()
//   firebaseAuth
//     .signInWithEmailAndPassword('961014lds@gmail.com', 'rim200135')
//     .then(() => {
//       firebaseAuth.onAuthStateChanged(user => {
//         if (user) {
//           console.log('FB USER...', user);
//         } else {
//           // User is signed out
//         }
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

const firebaseStorage = firebase.storage();
const firebaseStore = firebase.firestore();

// export { firebase, firebaseAuth, firebaseStorage, firebaseStore };
export { firebase, firebaseAuth, firebaseStorage, firebaseStore };
