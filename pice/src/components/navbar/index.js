import React from "react";
import "./styleSheet.css";
import ImgUrl from "../../Theme/images.json";
const Navbar = (props) => {
  return (
    <div>
      <header>
        <div className="header">
          <a className="logo" href="/" title={props.Content.WebsiteTitle}>
            <img src={ImgUrl.logo} alt={props.Content.WebsiteTitle} />
          </a>
          <nav className="navbar navbar-dark navbar-expand-md">
            <button
              className={`navbar-toggler ${props.dspToglr}`} //dspToglr={"invisible"} as props to dspToglr in mobileView
              type="button"
              data-toggle="collapse"
              data-target="#headermenu"
              aria-controls="headermenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="headermenu">
              {props.menu}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
