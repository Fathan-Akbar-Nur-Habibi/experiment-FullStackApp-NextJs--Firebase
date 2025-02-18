/*'use client'
import React from "react";
import signUp from "@/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const router = useRouter()

	const handleForm = async (event) => {
		event.preventDefault()

		const { result, error } = await signUp(email, password);

		if (error) {
			return console.log(error)
		}

		// else successful
		console.log(result)
		return router.push("/admin")
	}
	/* return (<div className="wrapper">
		<div className="form-wrapper">
			<h1 className="mt-60 mb-30">Experiment FullStack App With Next.Js & Firebase</h1>
			<form onSubmit={handleForm} className="form">
				<label htmlFor="email">
					<p>Email</p>
					<input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
				</label>
				<label htmlFor="password">
					<p>Password</p>
					<input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
				</label>
				<button type="submit">Sign up</button>
			</form>
		</div>
	</div>);
}
*/
/*
return (
	<div className="wrapper">
	  <div className="form-wrapper">
		<h1 className="title">Experiment FullStack App With Next.js & Firebase </h1>
		<form onSubmit={handleForm} className="form">
		  <label htmlFor="email">
			<p>Email</p>
			<input
			  onChange={(e) => setEmail(e.target.value)}
			  required
			  type="email"
			  name="email"
			  id="email"
			  placeholder="example@mail.com"
			  className="input-field"
			/>
		  </label>
		  <label htmlFor="password">
			<p>Password</p>
			<input
			  onChange={(e) => setPassword(e.target.value)}
			  required
			  type="password"
			  name="password"
			  id="password"
			  placeholder="********"
			  className="input-field"
			/>
		  </label>
		  <button type="submit" className="submit-btn">
			Sign up
		  </button>
		</form>
	  </div>
	</div>
  );  
}
export default Page;
*/
/*
'use client';
import React from 'react';
import signUp from '@/auth/signup';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

function Page() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const router = useRouter();
	const { user } = useAuthContext();

	const handleForm = async (event) => {
		event.preventDefault();

		const { result, error } = await signUp(email, password);

		if (error) {
			return console.log(error);
		}

		console.log(result);
		return router.push('/admin');
	};

	const handleLoginRedirect = () => {
		router.push('/signin');
	};

	return (
		<div className="wrapper">
			<div className="form-wrapper">
				<h1 className="title">Experiment FullStack App With Next.js & Firebase</h1>
				{!user ? (
					<form onSubmit={handleForm} className="form">
						<label htmlFor="email">
							<p>Email</p>
							<input
								onChange={(e) => setEmail(e.target.value)}
								required
								type="email"
								name="email"
								id="email"
								placeholder="example@mail.com"
								className="input-field"
							/>
						</label>
						<label htmlFor="password">
							<p>Password</p>
							<input
								onChange={(e) => setPassword(e.target.value)}
								required
								type="password"
								name="password"
								id="password"
								placeholder="********"
								className="input-field"
							/>
						</label>
						<button type="submit" className="submit-btn">
							Sign up
						</button>
					</form>
				) : (
					<button onClick={handleLoginRedirect} className="submit-btn">
						Go to Login
					</button>
				)}
			</div>
		</div>
	);
}

export default Page;
*/
'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import signUp from '@/auth/signup';
import signIn from '@/auth/signin';

function Page() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isExistingUser, setIsExistingUser] = React.useState(false);  // Tambahkan state untuk mengecek user terdaftar
    const [errorMessage, setErrorMessage] = React.useState('');
    const router = useRouter();
    const { user } = useAuthContext();

    const handleSignup = async (event) => {
        event.preventDefault();

        // Check if email already exists (use a sign-up method that checks for existing email)
        const { result, error } = await signUp(email, password);

        if (error) {
            // Cek jika error terkait email sudah terdaftar
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email sudah terdaftar. Silakan gunakan email lain atau login.');
            } else {
                console.log(error);
            }
            return;
        }

        console.log('Sign-up successful:', result);
        router.push('/admin');
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            console.error(error);
            return;
        }

        console.log('Login successful:', result);
        router.push('/admin');
    };

    const handleLoginRedirect = () => {
        router.push('/signin');
    };

    React.useEffect(() => {
        // Periksa apakah ada user yang sudah login
        if (user) {
            console.log('User is logged in:', user);
        } else {
            console.log('No user logged in.');
        }
    }, [user]);

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="title">Experiment FullStack App With Next.js & Firebase</h1>
                
                <form onSubmit={handleSignup} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            className="input-field"
                        />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="********"
                            className="input-field"
                        />
                    </label>
                    <button type="submit" className="submit-btn">
                        Sign Up
                    </button>
                </form>

                {/* Tombol Login */}
                <button onClick={handleLoginRedirect} className="submit-btn">
                    Go to Login
                </button>

                {/* Popup error jika email sudah terdaftar */}
                {errorMessage && <div className="error-popup">{errorMessage}</div>}
            </div>
        </div>
    );
}

export default Page;
