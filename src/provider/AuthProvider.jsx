import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import AuthContex from "./AuthContext";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
import { useState } from "react";

function AuthProvider({ children }) {
    const auth = getAuth(app);
    const [user , setUser ] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // onAuthStateChanged(auth, currentUser =>{
    //     if (currentUser) {
    //         console.log("current user", currentUser);
    //         setUser(currentUser);
    //     }else{
    //         console.log("no user");
    //         setUser(null)
    //     }
    // })

    const name = "Nodi Sagor Khal Bil ...";
    const authInfo = {
        createUser,
        loginUser,
        user,
        setUser,
        name
    };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
