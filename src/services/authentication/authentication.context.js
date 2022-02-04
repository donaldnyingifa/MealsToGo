import React, {
  useState,
  createContext,
} from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { auth } from "../../../App";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext =
  createContext();

export const AuthenticationContextProvider = ({
  children,
}) => {
  const [isLoading, setIsLoading] =
    useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (
    email,
    password,
    repeatedPassword
  ) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        email,
        password
      )
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
