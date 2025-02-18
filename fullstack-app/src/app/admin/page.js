/*'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
	const { user } = useAuthContext()
	const router = useRouter()

	React.useEffect(() => {
		if (user == null) router.push("/")
	}, [router, user])

	return (<h1>Only logged in users can view this page</h1>);
}

export default Page;
*/
/*
'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
	const { user, handleSignOut } = useAuthContext();
	const router = useRouter();

	React.useEffect(() => {
		if (user == null) {
			router.push("/signin"); // Jika tidak ada user, arahkan ke halaman login
		}
	}, [router, user]);

	return (
		<div>
			<h1>Welcome to Admin Page, {user?.email}</h1>
			<button onClick={handleSignOut} className="signout-btn">Sign Out</button>
		</div>
	);
}

export default Page;
*/
'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

function Page() {
    const { user, signOut } = useAuthContext();
    const router = useRouter();

    React.useEffect(() => {
        if (user == null) {
            router.push('/'); // redirect jika pengguna belum login
        }
    }, [router, user]);

    const handleSignOut = async () => {
        await signOut();
        router.push('/'); // Redirect ke halaman utama setelah logout
    };

    return (
        <div>
            <h1>Only logged in users can view this page</h1>
            {user && (
                <button onClick={handleSignOut} className="signout-btn">
                    Sign Out
                </button>
            )}
        </div>
    );
}

export default Page;
