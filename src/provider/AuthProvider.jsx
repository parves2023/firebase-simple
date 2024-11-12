import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AuthContex from "./AuthContext";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
import { useState, useEffect } from "react";

function AuthProvider({ children }) {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
      setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
      setLoading(true);
        return signOut(auth)
            .then(() => {
                console.log("User signed out successfully.");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    // Using useEffect to listen to the auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("current user", currentUser);
                if (!currentUser.emailVerified) {
                    alert("Your email is not verified");
                    setUser(null);
                    return;
                }
                setUser(currentUser);
                setLoading(false);
            } else {
                console.log("no user");
                setUser(null);
            }
        });

        // Cleanup function to unsubscribe from the listener when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    const name = "Nodi Sagor Khal Bil ...";
    const authInfo = {
        createUser,
        loginUser,
        loading,
        logOutUser,
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
