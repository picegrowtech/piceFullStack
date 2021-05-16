import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import Termsconditions from "../../components/termsconditions/index";
import Footer from "../../components/footer/index";

class TermsConditions extends React.Component {
  state = {};
  render() {
    return (
      <>
          <Navbar menu={Menu(this.props)} Content={this.props.Content}/>
          <Termsconditions Content={this.props.Content}/>
          <Footer  Content={this.props.Content}/>
      </>
    );
  }
}

export default TermsConditions;

function Menu(props) {
  return (
    <ul class="navbar-nav ml-auto">
      {props.Content.homeMenuOpt.map((item) => Options(item))}
    </ul>
  );
}
function Options(type) {
  return (
    <li key={type.name}>
      <Link to={type.link}>{type.name}</Link>
    </li>
  );
}
