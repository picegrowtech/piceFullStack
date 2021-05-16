import React from "react";
import "./styleSheet.css";
const TermsContent = (props) => {
  return (
    <div className="termsConditionsBg">
      <div className="container">
      	<h2>{props.Content.TermsTitle}</h2>
      	<h5>{props.Content.TermsIntro}</h5>
      	<p>{props.Content.TermsWelcome}</p>
      	<p>{props.Content.TermsCnt1}</p>
      	<p>{props.Content.TermsCnt2}</p>
		<p>{props.Content.TermsCnt3}</p>
		<p>{props.Content.TermsCnt4}</p>
      
      <h5>{props.Content.TermsTitle2}</h5>
	  <p>{props.Content.TermsCnt21}</p>

	  <h5>{props.Content.TermsTitle3}</h5>
	  <p>{props.Content.TermsCnt31}</p>
	  <p>{props.Content.TermsCnt32}</p>
	  <p>{props.Content.TermsCnt33}</p>
	  <p>{props.Content.TermsCnt34}</p>
	  <p>{props.Content.TermsCnt35}</p>
	  <p>{props.Content.TermsCnt36}</p>

	  <h5>{props.Content.TermsTitle4}</h5>
	  <p>{props.Content.TermsCnt41}</p>
	  <p>{props.Content.TermsCnt42}</p>
	  <p>{props.Content.TermsCnt43}</p>
	  <p>{props.Content.TermsCnt44}</p>
	  <p>{props.Content.TermsCnt45}</p>
	  <p>{props.Content.TermsCnt46}</p>

	  <h5>{props.Content.TermsTitle5}</h5>
	  <p>{props.Content.TermsCnt51}</p>

	  <h5>{props.Content.TermsTitle6}</h5>
	  <p>{props.Content.TermsCnt61}</p>

	  <h5>{props.Content.TermsTitle7}</h5>
	  <p>{props.Content.TermsCnt71}</p>
      </div>
    </div> 
  );
};


export default TermsContent;




 