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
import RegisterContent from "../../components/registercontent/index";
import Footer from "../../components/footer/index";
import ImgUrl from "../../Theme/images.json";
import { Menu } from "../../components/identicalFunc/index";

class Register extends React.Component {
  state = {};
  /*
  *checkAuth redirects app to Home if registration is true
  */
  checkAuth=()=>{
 return this.props.redirectTo ? <Redirect to="/" /> : null
  }

componentWillUnmount(){
  this.props.onClsRedirectTo(false)
}
  render() {
    return (
      <div
        className="loginpPage RgstrPage"
        style={{ backgroundImage: `url(${ImgUrl.loginbg})` }}
      >
        {this.checkAuth()}
        <Navbar menu={Menu(this.props.Content.homeMenuOpt)} Content={this.props.Content} />
        <RegisterContent onSbmitReg={this.props.onSbmitReg} Content={this.props.Content}/>
        <Footer  Content={this.props.Content}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return createStructuredSelector({
    regStatus : selectors.getRegStatus(),
    redirectTo : selectors.getRedirectTo(),
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onSbmitReg: (details) => dispatch(actions.sbmitReg(details)),
    onClsRedirectTo: (value) => dispatch(actions.clsRedirectTo(value)),
  };
}

const withReducer = injectReducer({ key: "Register", reducer: reducer });
const withSaga = injectSaga({ key: "Register", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withReducer, withSaga, withConnect)(Register);