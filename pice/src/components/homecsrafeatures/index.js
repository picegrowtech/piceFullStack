import React from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const HomeCsraFeatures = (props) => {
  return (
    <section className="csra_features_bg" id="csraFeatures">
      <div className="container">
        <div className="row">
          <h3>
            <span>{props.Content.csraTitle}</span> {props.Content.csraFeaturesTitle}
          </h3>
          <div className="csra_features_cnt">
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg1} alt="" />
              <p>{props.Content.csraFeaturesCnt1}</p>
            </div>
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg2} alt="" />
              <p>{props.Content.csraFeaturesCnt2}</p>
            </div>
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg3} alt="" />
              <p>{props.Content.csraFeaturesCnt3}</p>
            </div>
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg4} alt="" />
              <p>{props.Content.csraFeaturesCnt4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCsraFeatures;
