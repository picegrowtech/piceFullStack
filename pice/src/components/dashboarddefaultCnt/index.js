import React from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
import { BtnLink } from "../../components/identicalFunc/index";
const dashboardDfltCnt = (props) => {
  return (
    <div className="dashbrdDfltCntBg">
    	<div className="dashbrdDfltCnt">
            <h3>{props.Content.DashbrdDfltCnt}</h3>            
					 {BtnLink(props.gtStrFrmPath, props.Content.NxtTxt)}
        </div>
    </div>	
  );
};

export default dashboardDfltCnt;




 