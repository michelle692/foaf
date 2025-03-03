import { getAuth, signInWithEmailAndPassword, signOut, confirmPasswordReset} from "firebase/auth";
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

export async function handleResetPassword(email, newPassword, oobCode) {

    const adminCollection = collection(db, "admins");
    const queryResult = await getDocs(query(adminCollection, where("email", "==", email)));
    
    if (queryResult.empty) {
        alert('This email is not associated with an admin account.');
        return;
    }
    
    const auth = getAuth();
    try {
        await confirmPasswordReset(auth, oobCode, newPassword);
        alert('Password reset successful! We will now redirect you to the login page.');
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('There was an error resetting your password. Please try again.');
        console.log(errorCode, errorMessage);
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
