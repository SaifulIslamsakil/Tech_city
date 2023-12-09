import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../Firebase-config";

export const AuthContext = createContext({})

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Context = ({children}) => {
    const [carrentUser ,setCarrentUser] = useState(null)
    const [loder, setLoder] = useState(true)

    const newUser = (email,password)=>{
        setLoder(true)
        return createUserWithEmailAndPassword(Auth, email,password)
    }
    const userLogIn = (email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(Auth, email,password)
    }
    const userLogOut = ()=>{
        setLoder(true)
        return signOut(Auth)
    }
    const userRegistarWithGoogle = ()=>{
        setLoder(true)
        return signInWithPopup(Auth, googleProvider)
    }
    const userRegistarWithGithub = () =>{
        setLoder(true)
        return signInWithPopup(Auth,githubProvider)
    }
    useEffect(()=>{
        onAuthStateChanged(Auth,carrenUser =>{
            setLoder(false)  
         setCarrentUser(carrenUser)

            
         }) 
           
     },[])

    const AuthInfo ={
        newUser,
        userLogIn,
        userLogOut,
        userRegistarWithGoogle,
        userRegistarWithGithub,
        carrentUser,
        loder
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Context;