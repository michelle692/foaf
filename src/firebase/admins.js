import 
{ 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} 
from "firebase/auth";

import { db } from "../firebase/firebase-config";
import { collection, query, where, doc, addDoc, getDocs } from "firebase/firestore";

// Handle admin logins
export async function handleAdminLogin(email, password) {

    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const adminCollection = collection(db, "admins");
        const queryResult = await getDocs(query(adminCollection, where("email", "==", user.email)));
       
        if (queryResult.empty) {
            await addDoc(doc(db, "admins", email), {
                email: email
            })
        }

        return true;

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Invalid credentials.');
        console.log(errorCode, errorMessage);

        return false;
    }
}

export function handleSignOut() {
    const auth = getAuth();

    signOut(auth).then(() => {
        alert('You have successfully signed out.')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('There was an error signing you out. Please try again.')
        console.log("Error signing out: ", errorCode, errorMessage);
    });
}
