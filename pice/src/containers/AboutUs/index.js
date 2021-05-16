import React from "react";
import Navbar from "../../components/navbar/index";
import InnerpgeBanner from "../../components/innerpgebanner/index";
import Footer from "../../components/footer/index";
import { Menu } from "../../components/identicalFunc/index";
import ImgUrl from "../../Theme/images.json";

class AboutUs extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar menu={Menu(this.props.Content.homeMenuOpt)} Content={this.props.Content}/>
        <InnerpgeBanner  Content={this.props.Content}/>
        <div className="aboutContentbg">
          <div className="container">
            <div className="teamContentSection">
              <h4>{this.props.Content.teamLeadTxt}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtOmrAnj}</h5>
                  <h6>{this.props.Content.AbtPrjctTle}</h6>
                  <a href={this.props.Content.AbtOmrMail}>{this.props.Content.AbtOmrMail}</a>
                </div>
              </div>
              <h4>{this.props.Content.AbtTeam}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtHgyuGng}</h5>
                  <h6>{this.props.Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtXinZu}</h5>
                  <h6>{this.props.Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtJiaWu}</h5>
                  <h6>{this.props.Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtAlkKmtar}</h5>
                  <h6>{this.props.Content.AbtPrjctTle}</h6>
                </div>
              </div>
              <h4>{this.props.Content.AbtAdvsrs}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtWnmiHwa}</h5>
                  <h6>{this.props.Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtJinjun}</h5>
                  <h6>{this.props.Content.Abtibm}</h6>
                </div>
              </div>
              <h4>{this.props.Content.AbtClbratrs}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{this.props.Content.AbtQianNg}</h5>
                  <h6 className="text-capitalize">{this.props.Content.AbtInsforAI}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer  Content={this.props.Content}/>
      </>
    );
  }
}

export default AboutUs;
