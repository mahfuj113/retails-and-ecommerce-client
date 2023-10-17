import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    //create user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //sign in user
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //sign out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    //update profile
    const handleUpdateProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }
    //user set in state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        handleUpdateProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;