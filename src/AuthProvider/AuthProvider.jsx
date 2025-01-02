/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  console.log(user);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUserEmail = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-fawn-phi.vercel.app/jwt",
            loggedUserEmail,
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        console.log("user not found");
        axios.post(
          "https://car-doctor-server-fawn-phi.vercel.app/logout",
          loggedUserEmail,
          { withCredentials: true }
        );
      }
    });
    return () => {
      return unSubscribe;
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateName,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
