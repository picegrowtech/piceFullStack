import React from "react";
import "./styleSheet.css";
const PrivacyCnt = (props) => {
  return (
    <div className="termsConditionsBg">
      <div className="container">
      	<h2>{props.Content.PrvcyTitle}</h2>

      	<h5>{props.Content.PrvcyTitle1}</h5>
      	<p>{props.Content.PrvcyCnt1}</p>
      	<p>{props.Content.PrvcyCnt2}</p>
      	<p>{props.Content.PrvcyCnt3}</p>
      
      <h5>{props.Content.PrvcyTitle2}</h5>
	  <p>{props.Content.PrvcyCnt21}</p>
	  <p>{props.Content.PrvcyCnt22}</p>
	  <p>{props.Content.PrvcyCnt23}</p>
	  <p>{props.Content.PrvcyCnt24}</p>
	  <p>{props.Content.PrvcyCnt25}</p>
	  <p>{props.Content.PrvcyCnt26}</p>
	  <p>{props.Content.PrvcyCnt27}</p>
	  <p>{props.Content.PrvcyCnt28}</p>

	  <h5>{props.Content.PrvcyTitle3}</h5>
	  <p>{props.Content.PrvcyCnt31}</p>

	  <h5>{props.Content.PrvcyTitle4}</h5>
	  <p className="mt-20 mb-10"><strong>{props.Content.PrvcyTitle41}</strong></p>
	  <p>{props.Content.PrvcyCnt41}</p>

	  <h5>{props.Content.PrvcyTitle5}</h5>
	  <p>{props.Content.PrvcyCnt51}</p>

	  <h5>{props.Content.PrvcyTitle6}</h5>
	  <p>{props.Content.PrvcyCnt61}</p>

	  <h5>{props.Content.PrvcyTitle7}</h5>
	  <p>{props.Content.PrvcyCnt71}</p>
	  <p>{props.Content.PrvcyCnt72}</p>

	  <h5>{props.Content.PrvcyTitle8}</h5>
	  <p>{props.Content.PrvcyCnt81}</p>
      </div>
    </div> 
  );
};


export default PrivacyCnt;




 