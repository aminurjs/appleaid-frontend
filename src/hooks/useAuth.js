import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "@/config/firebase.config";
import useAxios from "./useAxios";

const useAuth = () => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  const [userRole, setUserRole] = useState();

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);
  useEffect(() => {
    if (user) {
      axios
        .get(`/user/${user.email}`)
        .then(function (response) {
          const { role } = response.data;
          setUserRole({ role });
          setIsRoleLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setUserRole({ role: null });
          setIsRoleLoading(false);
        });
    }
  }, [user, axios]);
  return {
    createUser,
    login,
    updateUser,
    user,
    isLoading,
    logout,
    googleLogin,
    userRole,
    isRoleLoading,
  };
};

export default useAuth;
