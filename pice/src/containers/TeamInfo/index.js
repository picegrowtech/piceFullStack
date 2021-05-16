import React from "react";
import Navbar from "../../components/navbar/index";
import DashboardSidebar from "../../components/dashboardsidebar/index";
import TeamInfoContent from "../../components/teaminfocontent/index";
import Footer from "../../components/footer/index";
import ImgUrl from "../../Theme/images.json";

class TeamInfo extends React.Component {
  state = {};

  render() {
    return (
      <>
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
              <TeamInfoContent Content={this.props.Content}/>
              <Footer  Content={this.props.Content}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamInfo;

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
            John Smith
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
