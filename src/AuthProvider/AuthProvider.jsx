import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const logOut = ()=>{
       return signOut(auth)
    }


    const AuthInfo = {
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        user,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;