import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from "./reducer";
import saga from "./saga";
import { createStructuredSelector } from "reselect";
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as loginSelectors from "../login/selectors";
import Navbar from "../../components/navbar/index";
import DashboardSidebar from "../../components/dashboardsidebar/index";
import DashboardDfltCnt from "../../components/dashboarddefaultCnt/index";
import Footer from "../../components/footer/index";
import ImgUrl from "../../Theme/images.json";
import GetStartedForm from "../../components/getstartedform/index";
import ResultsContent from "../../components/resultscontent/index";
import { Router, Route, Switch, Link, withRouter } from "react-router-dom";
class Dashboard extends React.Component {
  state = {};
  componentDidMount() {
    //console.log(this.props.getUserName);
  }
  render() {
    return (
      <div className="dashboard">
        <nav class="navbar navbar-dark sidebarIcon">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <Navbar menu={Menu()} Content={this.props.Content}/>
        <div className="dashboardCntBg">
          <DashboardSidebar Content={this.props.Content}/>
          <div className="dashbrdRight">
            <Switch>
              <Route exact path={`${this.props.match.path}`}>
                <DashboardDfltCnt
                Content={this.props.Content}
                  gtStrFrmPath={`${this.props.match.path}/get-started`}
                />
              </Route>
              <Route path={`${this.props.match.path}/get-started`}>
                <GetStartedForm
                Content={this.props.Content}
                  resPath={`${this.props.match.path}/results`}
                  onSbmitGetStrtFrm={(e) =>
                    this.props.onSbmitGetStrtFrm(e, "PICE")
                  }
                />
              </Route>
              <Route path={`${this.props.match.path}/results`}>
                <ResultsContent Content={this.props.Content}/>
              </Route>
            </Switch>
            <Footer  Content={this.props.Content}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return createStructuredSelector({
    //loginStatus: loginSelectors.getUserName(),
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onSbmitGetStrtFrm: (details) => dispatch(actions.uploadGetStrtFrm(details)),
  };
}

const withReducer = injectReducer({ key: "Dashboard", reducer: reducer });
const withSaga = injectSaga({ key: "Dashboard", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect
)(Dashboard);

function Menu() {
  return (
    <ul class="navbar-nav ml-auto">
      <li>
        <form>
          <div className="searchBg">
            <input type="text" className="form-control" placeholder="Search" />
            <input
              style={{ backgroundImage: `url(${ImgUrl.SearchIcon})` }}
              type="submit"
              className="searchbtn"
              value=""
            />
          </div>
        </form>
      </li>
      <li>
        <button type="button" class="btn notifications">
          <img src={ImgUrl.NotifyIcon} alt="" />
          <span class="badge badge-light">9</span>
        </button>
      </li>
      <li>
        <button type="button" class="btn message">
          <img src={ImgUrl.MsgIcon} alt="" />
          <span class="badge badge-light">9</span>
        </button>
      </li>
      <li class="dropdown">
        <button
          style={{ backgroundImage: `url(${ImgUrl.dropDownIcon})` }}
          class="btn btn-secondary"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span style={{ backgroundImage: `url(${ImgUrl.ProfileIcon})` }}>
            PICE_MEMBER
          </span>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenu2"
        >
          <li>
            <button
              style={{ backgroundImage: `url(${ImgUrl.ProfileIcon})` }}
              class="dropdown-item"
              type="button"
            >
              User Profile
            </button>
          </li>
          <li>
            <button
              style={{ backgroundImage: `url(${ImgUrl.PwdIcon})` }}
              class="dropdown-item"
              type="button"
            >
              Change Password
            </button>
          </li>
          <li>
            <button
              style={{ backgroundImage: `url(${ImgUrl.HelpIcon})` }}
              class="dropdown-item"
              type="button"
            >
              Help
            </button>
          </li>
          <li>
            <button
              style={{ backgroundImage: `url(${ImgUrl.DeleteIcon})` }}
              class="dropdown-item"
              type="button"
            >
              Remove Account
            </button>
          </li>
          <li>
            <button
              style={{ backgroundImage: `url(${ImgUrl.LogOutIcon})` }}
              class="dropdown-item"
              type="button"
            >
              Logout
            </button>
          </li>
        </ul>
      </li>
    </ul>
  );
}
