import React, {useState} from "react";
import ImgUrl from "../../Theme/images.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./styleSheet.css";
const RegisterContent = (props) => {
const [fName, setFName]=useState("")
const [lname, setLName]=useState("")
const [orgName, setOrgName]=useState("")
const [phNo, setPhNo]=useState(0)
const [email, setEmail]=useState("")
const [pass, setPass]=useState("")
const [cnfrmPass, setCnfrmPass]=useState("")
const [cnfrncName, setCnfrncName]=useState("")
const [cnfrncURL, setCnfrncURL]=useState("")
const [cnfrncRole, setCnfrncRole]=useState("")
const [strDate, setStrDate]=useState("")
const [submitionSys, setSubmitionSys]=useState("")
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const Rgstr=()=>{
	props.onSbmitReg({fName,lname,orgName, phNo, email,password:pass,cnfrmPass,cnfrncName,cnfrncURL,cnfrncRole,strDate,endDate,submitionSys});
}
  return (
    <div className="registerBg">
	    <div className="container">
	      <div className="RgstrBxbg">
	        <h3>{props.Content.RgstrTitleFst} <span>{props.Content.csraTitle}</span> {props.Content.RgstrTitleLst}</h3>
	        <form className="registerForm">
	          <div class="form-group">
	            <input onChange={(inp)=>setFName(inp.target.value)} type="text" class="form-control" id="firstName" placeholder={props.Content.FrmFstName} />
	          </div>
	          <div  class="form-group">
	            <input onChange={(inp)=>setLName(inp.target.value)}  type="text" class="form-control" id="lastName" placeholder={props.Content.FrmLstName} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setOrgName(inp.target.value)}  type="text" class="form-control" id="orgName" placeholder={props.Content.FrmorgName} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setPhNo(inp.target.value)}  type="text" class="form-control" id="phone" placeholder={props.Content.FrmPhone} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setEmail(inp.target.value)}  type="text" class="form-control" id="email" placeholder={props.Content.FrmEmail} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setPass(inp.target.value)}  type="password" class="form-control" id="pwd" placeholder={props.Content.FrmPwd} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setCnfrmPass(inp.target.value)}  type="password" class="form-control" id="pwd" placeholder={props.Content.FrmCnfrPwd} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setCnfrncName(inp.target.value)}  type="text" class="form-control" id="lastName" placeholder={props.Content.FrmCnfrName} />
	          </div>
	          <div class="form-group">
	            <input onChange={(inp)=>setCnfrncURL(inp.target.value)}  type="text" class="form-control" id="ConfUrl" placeholder={props.Content.FrmCnfrUrl} />
	          </div>
	          <div class="form-group">
		          <select onChange={(inp)=>setCnfrncRole(inp.target.value)}  style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} class="form-control" id="exampleFormControlSelect1" onchange='CheckColors(this.value);'>
		          	<option value={props.Content.FrmRleConf}>{props.Content.FrmRleConf}</option>
		          	<option value={props.Content.FrmRleConfOpt1}>{props.Content.FrmRleConfOpt1}</option>
		          	<option value={props.Content.FrmRleConfOpt2}>{props.Content.FrmRleConfOpt2}</option>
		          	<option value={props.Content.FrmRleConfOpt3}>{props.Content.FrmRleConfOpt3}</option>
		          	<option value={props.Content.FrmRleConfOpt4}>{props.Content.FrmRleConfOpt4}</option>
		          	<option value={props.Content.FrmRleConfOpt5}>{props.Content.FrmRleConfOpt5}</option>
		          </select>
		          <input type="text" class="form-control hidden_txtbox" name="color" id="color" placeholder=""  style={{ display: 'none' }} />
	          </div>
	          <div class="form-group date" style={{ backgroundImage: `url(${ImgUrl.CalendarIcn})` }}>
	         	<DatePicker dateFormat="dd/MM/yyyy" placeholderText="" minDate={new Date()} selected={startDate} onChange={date => setStartDate(date)} />
	          </div>
	           <div class="form-group date" style={{ backgroundImage: `url(${ImgUrl.CalendarIcn})` }}>
	            <DatePicker dateFormat="dd/MM/yyyy" placeholderText="" minDate={new Date()} selected={endDate} onChange={date => setEndDate(date)} />
	          </div>
	          <div class="form-group">
		          <select onChange={(inp)=>setSubmitionSys(inp.target.value)}  style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} class="form-control" id="exampleFormControlSelect1">
		          	<option>{props.Content.FrmSubSystem}</option>
		          	<option>{props.Content.FrmSubSystemOpt1}</option>
		          	<option>{props.Content.FrmSubSystemOpt2}</option>
		          	<option>{props.Content.FrmSubSystemOpt3}</option>
		          </select>
	          </div>
			  <div class="form-group">
				<div class="form-check">
					<label class="chkBcxLabl">{props.Content.FrmIagreto} <a href="#">{props.Content.FrmTermsTxt}</a>, <a href="#">{props.Content.FrmPrvcyPcy}</a> {props.Content.FrmuseCook}
					  <input type="checkbox" />
					  <span class="checkmark"></span>
					</label>
				</div>
			  </div>
	          <div class="form-group d-flex justify-this.props.Content-center align-items-center">
	             <button onClick={()=>Rgstr()} type="button" class="btn btn-submit">{props.Content.FrmrgstrBtn}</button>
	          </div>
	        </form>
	        
	      </div>
	    </div>
	  </div>
  );
};


export default RegisterContent;