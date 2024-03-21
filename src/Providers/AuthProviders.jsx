import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser]= useState(' ');
    const [loading, setLoading]= useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //Create user with eamil and password
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Log in user with email and password
    const logIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with google 
    const SignInwithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    
    }

    //Sign in with gitHub
    const SignInwithGithub = ()=>{
        setLoading(true);
        return signInWithPopup (auth, githubProvider);
    }


    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current user',currentUser)
            setLoading(false);
        })

        return ()=>{
            unSubscribe([]);
        }
    },[])

    const userInfo ={
        user,
        loading,
        SignInwithGoogle,
        SignInwithGithub,
        logOut,
        createUser,
        logIn


 
    }
    return (
       <AuthContext.Provider value={userInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;