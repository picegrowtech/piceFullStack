import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'
import config from '../../config'

const FirebaseAuth = (props) => {
	
	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
		  setIsSignedIn(!!user);
		});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	  }, []);
	  const [isSignedIn, setIsSignedIn] = useState(false)
	  const [isFirebaseInitialized, setIsFirebaseInitialized] = useState(false)
	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
		signInSuccessUrl: props.Content.homeMenuOpt[0].link,
		// We will display Google and Facebook as auth providers.
		signInOptions: [
		  firebase.auth.GoogleAuthProvider.PROVIDER_ID
		],
	  };

	const authToggler = () => {
		if (!isSignedIn) return (
			<>
				<h3>{props.Content.singInTxt}</h3>
				<form className="loginForm">
					<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
				</form>
			</>
		)
		else return (
			<>
				<form className="loginForm">
					{console.log(firebase.auth().currentUser)}
				<p>Welcome {firebase.auth().currentUser.displayName}!</p><p>You are now signed-in as {firebase.auth().currentUser.email}!</p>
				<input onClick={() => firebase.auth().signOut()} type="button" className="btn btn-submit" value={`${props.Content.singOutTxt} ?`} />
				</form>
			</>
		)
	}
	return (<>
		{authToggler()}
	</>
	);
};


export default FirebaseAuth;

/*
*use this code for sign in using custom name and pass

<div class="form-group">
							<input onChange={(inp) => setEmail(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.loginUsrIcn})` }} type="email" class="form-control" id="emailAddress" placeholder={props.Content.emailAddress} />
						</div>
						<div class="form-group">
							<input onChange={(inp) => setPass(inp.target.value)} style={{ backgroundImage: `url(${ImgUrl.loginPwdIcn})` }} type="password" class="form-control" id="password" placeholder={props.Content.Pwd} />
						</div>
						<div class="form-group d-flex justify-this.props.Content-between align-items-center">
							<button onClick={() => login()} type="button" class="btn btn-submit">{props.Content.singInTxt}</button>
							<a href="#" className="frgtPwd">{props.Content.FrgtPwdTxt}</a>
						</div>
						<p>{props.Content.newToCSRA}<a href="/signup">{props.Content.signUpNow}</a></p>
						*/