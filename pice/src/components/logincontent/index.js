import React, { useState } from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const LoginContent = (props) => {
	const [email, setEmail] = useState("")
	const [password, setPass] = useState("")
	const login = () => {
		props.onSbmitLogin({ email, password });
	}
	return (
		<div className="loginBg">
			<div className="container">
				<div className="loginBxbg">
					<h3>{props.Content.singInTxt}</h3>
					<form className="loginForm">
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
					</form>
					<p>{props.Content.newToCSRA}<a href="/signup">{props.Content.signUpNow}</a></p>
				</div>
			</div>
		</div>
	);
};


export default LoginContent;