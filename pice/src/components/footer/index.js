import React from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const Footer = (props) => {
  return (
    <div>
      <footer>
            <div className="footer">
              <div className="footer_left">
                <ul>{props.Content.footerMenuOpt.map((item) => Options(item))}</ul>
                <img src={ImgUrl.footerC3SRLogo} className="footerC3sr" alt="" />
              </div>
              <div className="copyright_txt">
                <p>{props.Content.copyRighttxt}</p>
                <div className="footerLogos">
                  <img src={ImgUrl.footerIbmlogo} className="" alt="" />
                  <img src={ImgUrl.footerIllionslogo} className="" alt="" />
                </div>
              </div>
            </div>
      </footer>
    </div>
  );
};

function Options(type) {
  return (
    <li key={type.name}>
      <a href={type.link}>
        {type.name}
      </a>
    </li>
  );
}

export default Footer;
