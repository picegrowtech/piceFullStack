import React from "react";
import { Redirect  } from "react-router-dom"
import { compose } from "redux";
import { connect } from "react-redux";
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from "./reducer";
import saga from "./saga";
import { createStructuredSelector } from "reselect";
import * as actions from "./actions";
import * as selectors from "./selectors";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import ImgUrl from "../../Theme/images.json";
import LoginContent from "../../components/logincontent/index";
import { Menu } from "../../components/identicalFunc/index";

class Login extends React.Component {
  state = {};
  
  /*
  *checkAuth redirects app to Home if registration is true
  */
 checkAuth=()=>{
  return this.props.redirectTo ? <Redirect to="/dashboard" /> : null
   }
 
 componentWillUnmount(){
   this.props.onClsRedirectTo(false)
 }
  render() {
    return (
      <div
        className="loginpPage"
        style={{ backgroundImage: `url(${ImgUrl.loginbg})` }}
      >
        {this.checkAuth()}
        <Navbar menu={Menu(this.props.Content.homeMenuOpt)} Content={this.props.Content}/>
        <LoginContent onSbmitLogin={this.props.onSbmitLogin} Content={this.props.Content}/>
        <Footer  Content={this.props.Content}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return createStructuredSelector({ 
    loginStatus: selectors.getLoginStatus(),  
    redirectTo : selectors.getRedirectTo(),
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onSbmitLogin: (details) => dispatch(actions.sbmitLogin(details)),
    onClsRedirectTo: (value) => dispatch(actions.clsRedirectTo(value)),
  };
}

const withReducer = injectReducer({ key: "Login", reducer: reducer });
const withSaga = injectSaga({ key: "Login", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withReducer, withSaga, withConnect)(Login);