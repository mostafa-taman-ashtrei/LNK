import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./clientApp";

export const signInWithGoogle = async () => signInWithPopup(auth, new GoogleAuthProvider());

export const logout = () => signOut(auth);
