import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider} from "firebase/auth";

const AuthContext = React.createContext();

const provider = new GoogleAuthProvider();

const GithubProvider = new GithubAuthProvider();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
    return alert("Hello world");
  }

  function signupwithGoogle() {
    return auth.signInWithPopup(provider)
  }

  function signupwithGithub() {
    return auth.signInWithPopup(GithubProvider)
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubsribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    signupwithGoogle,
    signupwithGithub
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
