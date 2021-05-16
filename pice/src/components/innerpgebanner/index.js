import React from "react";
import "./styleSheet.css";
const InnerpgeBanner = (props) => {
  return (
    <div className="aboutBg">
      <div className="container"><h2>{props.Content.aboutUsTxt}</h2></div>
    </div> 
  );
};


export default InnerpgeBanner;




 