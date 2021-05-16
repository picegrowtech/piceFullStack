import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
function InviteModal(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
  }
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
      <div>
        <button className="btn" style={{ backgroundImage: `url(${ImgUrl.teamInviteIcon})` }} onClick={openModal}>{this.props.Content.InvUsr}</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{this.props.Content.InvUsr}</h2>
          <button className="closeBtn" style={{ backgroundImage: `url(${ImgUrl.closeIcon})` }} onClick={closeModal}></button>
          <form className="modalForm">
			  <div class="form-group">
	            <input type="text" class="form-control" id="firstName" placeholder={this.props.Content.FrmFstName} />
	          </div>
	          <div  class="form-group">
	            <input type="text" class="form-control" id="lastName" placeholder={this.props.Content.FrmLstName} />
	          </div>
	          <div class="form-group">
	            <input type="text" class="form-control" id="orgName" placeholder={this.props.Content.FrmorgName} />
	          </div>
	          <div class="form-group">
	            <input type="text" class="form-control" id="phone" placeholder={this.props.Content.FrmPhone} />
	          </div>
	          <div class="form-group">
	            <input type="text" class="form-control" id="email" placeholder={this.props.Content.FrmEmail} />
	          </div>   
	          <div class="form-group">
		          <select style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} class="form-control" id="exampleFormControlSelect1" onchange='CheckColors(this.value);'>
		          	<option value={this.props.Content.FrmRleConf}>{this.props.Content.FrmRleConf}</option>
		          	<option value={this.props.Content.FrmRleConfOpt1}>{this.props.Content.FrmRleConfOpt1}</option>
		          	<option value={this.props.Content.FrmRleConfOpt2}>{this.props.Content.FrmRleConfOpt2}</option>
		          	<option value={this.props.Content.FrmRleConfOpt3}>{this.props.Content.FrmRleConfOpt3}</option>
		          	<option value={this.props.Content.FrmRleConfOpt4}>{this.props.Content.FrmRleConfOpt4}</option>
		          	<option value={this.props.Content.FrmRleConfOpt5}>{this.props.Content.FrmRleConfOpt5}</option>
		          </select>
		          <input type="text" class="form-control hidden_txtbox" name="color" id="color" placeholder=""  style={{ display: 'none' }} />
	          </div>  
	          <div class="form-group d-flex justify-content-center align-items-center">
	             <button type="button" class="btn btn-submit">{this.props.Content.InviteTxt}</button>
	          </div>    
          </form>
        </Modal>
      </div>
    );
}

const teamInfoContent = () => {
  return (
    <div className="teamInfoContentBg">
    	<div className="container">
    			<div className="teamInfoContent">
		            <div className="btnBg">
		            	<InviteModal />
		            	<button style={{ backgroundImage: `url(${ImgUrl.teamRemoveIcon})` }} className="btn remove">{this.props.Content.RmvUsr}</button>
		            </div>
		            <div class="teamList table-responsive">
					  <table class="table">
					    <tr>
					    	<th>&nbsp;</th>
					    	<th>{this.props.Content.UsrNameTxt}</th>
					    	<th>{this.props.Content.EmailAdd}</th>
					    	<th>{this.props.Content.TeamRle}</th>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user1" /></td>
					    	<td><label for="user1">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user2" /></td>
					    	<td><label for="user2">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user3" /></td>
					    	<td><label for="user3">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user4" /></td>
					    	<td><label for="user4">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user5" /></td>
					    	<td><label for="user5">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user6" /></td>
					    	<td><label for="user6">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user7" /></td>
					    	<td><label for="user7">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user8" /></td>
					    	<td><label for="user8">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user9" /></td>
					    	<td><label for="user9">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user10" /></td>
					    	<td><label for="user10">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user11" /></td>
					    	<td><label for="user11">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					    <tr>
					    	<td><input type="checkbox" id="user12" /></td>
					    	<td><label for="user12">{this.props.Content.UsrName}</label></td>
					    	<td>{this.props.Content.UsrEmail}</td>
					    	<td>{this.props.Content.AdminTxt}</td>
					    </tr>
					  </table>
					</div>
		        </div>
    		</div>

    </div>	
  );
};

export default teamInfoContent;




 