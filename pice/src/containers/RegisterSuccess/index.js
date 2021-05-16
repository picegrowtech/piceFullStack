import React from "react";
import Navbar from "../../components/navbar/index";
import RegisterSuccessCnt from "../../components/registersuccesscontent/index";
import Footer from "../../components/footer/index";
import { Menu } from "../../components/identicalFunc/index";

class RegisterSuccess extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar menu={Menu(this.props.Content.homeMenuOpt)} Content={this.props.Content}/>
        <RegisterSuccessCnt Content={this.props.Content}/>
        <Footer  Content={this.props.Content}/>
      </>
    );
  }
}

export default RegisterSuccess;
