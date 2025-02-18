/*import firebase_app from "../firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, password) {
	let result = null,
		error = null;
	try {
		result = await createUserWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
	*/
/*	import firebase_app from "../firebase/config";
	import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
	
	const auth = getAuth(firebase_app);
	
	export default async function signUp(email, password) {
		let result = null,
			error = null;
		try {
			result = await createUserWithEmailAndPassword(auth, email, password);
		} catch (e) {
			error = e;
		}
	
		return { result, error };
	}
	*/
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { result: userCredential, error: null };
    } catch (error) {
        return { result: null, error };
    }
};

export default signUp;
