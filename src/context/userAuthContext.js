import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase-config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
  
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(nama, email, password) {
      return createUserWithEmailAndPassword(auth, nama, email, password);
    }
    function logOut() {
        return signOut(auth);
      }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          // console.log("Auth", currentuser);
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    

    return (
    <userAuthContext.Provider
      value={{user, signUp, logIn, logOut}}>
        {children}
      </userAuthContext.Provider>
    );
  }

export function useUserAuth() {
    return useContext(userAuthContext)
}