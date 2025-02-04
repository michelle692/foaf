import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";

// Handle admin logins
export async function handleAdminLogin(username, password) {
    console.log("login attempt");
    try {
        const userDoc = await getDoc(doc(db, "admins", username));

        if(userDoc.exists()) {
            if (userDoc.data().password === password) {
                localStorage.setItem('IsAdmin', 'true');
                return true;
            }
        } else {
            alert('Invalid credentials');
            return false;
        }
    } catch (e) {
        alert('There was an error logging in. Please try again.');
        return false;
    }
}