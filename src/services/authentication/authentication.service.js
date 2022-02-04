import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { auth } from "../../../App";

export const loginRequest = (email, password) =>
  auth.signInWithEmailAndPassword(
    email,
    password
  );
