import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDbPCHEl4DCcrrGGwfydwJ14paCWEsvjPg",
    authDomain: "eshop-clothing.firebaseapp.com",
    databaseURL: "https://eshop-clothing.firebaseio.com",
    projectId: "eshop-clothing",
    storageBucket: "eshop-clothing.appspot.com",
    messagingSenderId: "649982628253",
    appId: "1:649982628253:web:d06f4bebe8597291dbdf74",
    measurementId: "G-XRTB6YDFSR"
  }

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);

    const snapshot=await userRef.get();

    console.log(snapshot);

    if(!snapshot.exists)
    {
      const {displayName,email,uid}=userAuth;
      const createdAt=new Date();
      console.log(createdAt);

      try {
        await userRef.set({
          displayName,email,createdAt,...additionalData
        })
      } catch (error) {
        console.log("error creating user",error.message)
      }
    }

    return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();

 provider.setCustomParameters({prompt:'select_account'});

 export const signInWithGoogle=()=>auth.signInWithPopup(provider);

 export default firebase;