import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const LoginComponent = ({ authenticateUser, authenticated }) => {
	return (
		<div>
			<h2>Please Login HERE!</h2>
			<form onSubmit={authenticateUser}>
				<input
					type='text'
					name='username'
					placeholder='USERname'
					defaultValue='Dev'
				/>
				<input
					type='password'
					name='password'
					placeholder='PASSWORD'
					defaultValue=''
				/>
				{authenticated === mutations.NOT_AUTHENTICATED ? (
					<p>Login InCorrect</p>
				) : null}
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

const mapStateToProps = ({ session }) => ({
	authenticated : session.authenticated
});

const mapDispatchToProps = dispatch => ({
	authenticateUser (e) {
		e.preventDefault();
		let username = e.target[`username`].value;
		let password = e.target[`password`].value;
		dispatch(mutations.requestAuthenticateUser(username, password));
	}
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(
	LoginComponent
);
