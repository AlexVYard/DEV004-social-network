/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// mporto la configuracion de firebase
import Firebase from "../firebaseConfig.js";
// pongo los nombres usuales de los objetos y funciones de firebase
const { 
  auth, createUserWithEmailAndPassword, set, ref, database,
} = Firebase;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const signUp = async (email, password) => {
  // Initialize Firebase
  // const database = getDatabase(FirebaseApp);

  try {
    const credentialsUser = await createUserWithEmailAndPassword(auth, email, password)
    const user = credentialsUser.user;
    await set(ref(database, `users/${user.uid}`), {
      email,
      password,
    })
    // swal('Usuario en la base de datos!');
    return true;
  } catch (error) {
    const errorCode = error.code;
    return errorCode;
  }
};
