import React from "react";
import firebase from 'firebase'
import config from './config'
import Home from "./containers/homeScreen/index";
import About from "./containers/AboutUs/index";
import Login from "./containers/login/index";
import Register from "./containers/Register/index";
import Dashboard from "./containers/Dashboard/index";
import RegisterSuccess from "./containers/RegisterSuccess/index";
import TermsConditions from "./containers/TermsConditions/index";
import PrivacyPolicy from "./containers/PrivacyPolicy/index";
import TeamInfo from "./containers/TeamInfo/index";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Content from "./utils/content.json";
const history = createBrowserHistory();

class App extends React.Component {
  state = {adminIsSignedIn:false, superAdminEmail:["picegrow@gmail.com"]}
  componentDidMount() {
    fetch('https://pice.herokuapp.com/displayData')
      .then(res => res.json())
      .then(res => this.setState({ data:JSON.parse(res[0].data) }))
      .then(json => console.log(json))

    if (!firebase.apps.length) firebase.initializeApp(config);
    else firebase.app(); // if already initialized

    firebase.auth().onAuthStateChanged(user => {
      const isAdminEmail = [...this.state.superAdminEmail, ...this.state.data?.AdminEmail].includes(user?.email)
      const isEmailVerified = user?.emailVerified === true
      this.setState({ adminIsSignedIn: (isAdminEmail && isEmailVerified) });
    });
  }
        
  
  data=()=>{ return this.state.data}
  appPages=()=>{
    return(
    <div>
    <Router history={history}>
      <Switch>
        <Route exact path={this.state.data?.homeMenuOpt[0].link}>
          <Home Content={this.state.data} adminIsSignedIn={this.state.adminIsSignedIn}/>
        </Route>
        <Route exact path={this.state.data?.homeMenuOpt[1].link}>
          <About Content={this.state.data}/>
        </Route>
        <Route exact path={this.state.data?.homeMenuOpt[2].link}>
          <Dashboard Content={this.state.data}/>
        </Route>
        <Route exact path={this.state.data?.homeMenuOpt[3].link}>
          <Login Content={this.state.data}/>
        </Route>
        <Route exact path="/success">
          <RegisterSuccess Content={this.state.data}/>
        </Route>
        <Route exact path="/terms-conditions">
          <TermsConditions Content={this.state.data}/>
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy Content={this.state.data}/>
        </Route>
        <Route exact path="/team-info">
          <TeamInfo Content={this.state.data}/>
        </Route>
      </Switch>
    </Router>
  </div>)
  }
  render() {
    return (
      this.state.data? this.appPages() : <div></div>
    );
  }
}

export default App;
const val = App.state?.data?App.state.data:null
export{val}