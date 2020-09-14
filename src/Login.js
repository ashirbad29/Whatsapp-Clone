import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

function Login() {
	const signIn = () => {};

	return (
		<div className="login">
			<div className="login__container">
				<img src={require('./images/whatsapp-logo.png')} alt="whatsapp logo" />
				<div className="login__text">
					<h1>sign in to whatsapp</h1>
				</div>

				<Button onClick={signIn}>Sign in with Google</Button>
			</div>
		</div>
	);
}

export default Login;
