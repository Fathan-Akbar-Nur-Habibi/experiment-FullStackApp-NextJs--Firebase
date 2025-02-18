/*import firebase_app from "../firebase/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
	let result = null,
		error = null;
	try {
		result = await signInWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
	*/
	/*
	import firebase_app from "../firebase/config";
	import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
	
	const auth = getAuth(firebase_app);
	
	export default async function signIn(email, password) {
		let result = null,
			error = null;
		try {
			result = await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			error = e;
		}
	
		return { result, error };
	}
	
*/
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { result: userCredential, error: null };
    } catch (error) {
        return { result: null, error };
    }
};

export default signIn;
