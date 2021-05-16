import React from "react";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const resultsContent = () => {
  return (
    <div className="resultCntBg">
    	<div className="container">
    		<div className="resultCnt">
    		<h3>{this.props.Content.ResultsTxt}</h3>
	    		<div className="resultTable table-responsive">
	    			<table>
		    			<tr>
		    				<th>{this.props.Content.resultsTitle}</th>
		    				<th>{this.props.Content.DnloadTxt}</th>
		    			</tr>
		    			<tr>
		    				<td>{this.props.Content.TopReviewers}</td>
		    				<td><a className="btn" href="#">{this.props.Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{this.props.Content.FinalAssingment}</td>
		    				<td><a className="btn" href="#">{this.props.Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{this.props.Content.MissingReviews}</td>
		    				<td><a className="btn" href="#">{this.props.Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{this.props.Content.RelevantPapers}</td>
		    				<td><a className="btn" href="#">{this.props.Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{this.props.Content.coiname}</td>
		    				<td><a className="btn" href="#">{this.props.Content.DwnloadCSV}</a></td>
		    			</tr>
		    			<tr>
		    				<td>{this.props.Content.SourceofCnflict}</td>
		    				<td><a className="btn" href="#">{this.props.Content.DwnloadCSV}</a></td>
		    			</tr>
		    		</table>
	    		</div>
        	</div>
    	</div>
    </div>	
  );
};

export default resultsContent;




 