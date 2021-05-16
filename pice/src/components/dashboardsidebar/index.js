import React from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const dashboardSidebar = (props) => {
  return (
    <div class="collapse" id="navbarToggleExternalContent">
    	<div className="sidebarBg">
    		<ul>
    			<li><a href="/dashboard"><img src={ImgUrl.dashBoardIcon} alt="" /> {props.Content.dashbrdTxt}</a></li>
    			<li><a href="/team-info"><img src={ImgUrl.teamInfoIcon} alt="" /> {props.Content.teamInfo}</a></li>
    			<li><a href="/dashboard/results"><img src={ImgUrl.resultsIcon} alt="" /> {props.Content.ResultsTxt}</a></li>
    		</ul>
    	</div>   
    </div>	
  );
};

export default dashboardSidebar;




 