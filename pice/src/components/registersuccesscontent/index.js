import React from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const RegisterSuccessCnt = () => {
  return (
    <div className="registerThanksBg">
	    <div className="container">
	      <div className="thanksContent">
	      	<h3>{this.props.Content.RgstrThnksTitle}</h3>
	      	<img src={ImgUrl.RegisterSuccIcon} alt="" />
	      	<p>{this.props.Content.RgstrThnksMsg}</p>
	      	<a href="/" className="btn">{this.props.Content.goToHome}</a>
	      </div>
	    </div>
	  </div>
  );
};


export default RegisterSuccessCnt;