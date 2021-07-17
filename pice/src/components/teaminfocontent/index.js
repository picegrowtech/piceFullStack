import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};
function InviteModal({ props }) {
	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div>
			<button className="btn" style={{ backgroundImage: `url(${ImgUrl.teamInviteIcon})` }} onClick={openModal}>{props.Content.InvUsr}</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>

				<h2 ref={_subtitle => (subtitle = _subtitle)}>{props.Content.InvUsr}</h2>
				<button className="closeBtn" style={{ backgroundImage: `url(${ImgUrl.closeIcon})` }} onClick={closeModal}></button>
				<form className="modalForm">
					<div className="form-group">
						<input type="text" className="form-control" id="firstName" placeholder={props.Content.FrmFstName} />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="lastName" placeholder={props.Content.FrmLstName} />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="orgName" placeholder={props.Content.FrmorgName} />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="phone" placeholder={props.Content.FrmPhone} />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="email" placeholder={props.Content.FrmEmail} />
					</div>
					<div className="form-group">
						<select style={{ backgroundImage: `url(${ImgUrl.selectArw})` }} className="form-control" id="exampleFormControlSelect1" onchange='CheckColors(this.value);'>
							<option value={props.Content.FrmRleConf}>{props.Content.FrmRleConf}</option>
							<option value={props.Content.FrmRleConfOpt1}>{props.Content.FrmRleConfOpt1}</option>
							<option value={props.Content.FrmRleConfOpt2}>{props.Content.FrmRleConfOpt2}</option>
							<option value={props.Content.FrmRleConfOpt3}>{props.Content.FrmRleConfOpt3}</option>
							<option value={props.Content.FrmRleConfOpt4}>{props.Content.FrmRleConfOpt4}</option>
							<option value={props.Content.FrmRleConfOpt5}>{props.Content.FrmRleConfOpt5}</option>
						</select>
						<input type="text" className="form-control hidden_txtbox" name="color" id="color" placeholder="" style={{ display: 'none' }} />
					</div>
					<div className="form-group d-flex justify-content-center align-items-center">
						<button type="button" className="btn btn-submit">{props.Content.InviteTxt}</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}

const teamInfoContent = (props) => {
	return (
		<div className="teamInfoContentBg">
			<div className="container">
				<div className="teamInfoContent">
					<div className="btnBg">
						<InviteModal props={props} />
						<button style={{ backgroundImage: `url(${ImgUrl.teamRemoveIcon})` }} className="btn remove">{props.Content.RmvUsr}</button>
					</div>
					<div className="teamList table-responsive">
						<table className="table">
							<tbody>
								<tr>
									<th>&nbsp;</th>
									<th>{props.Content.UsrNameTxt}</th>
									<th>{props.Content.EmailAdd}</th>
									<th>{props.Content.TeamRle}</th>
								</tr>
								<tr>
									<td><input type="checkbox" id="user1" /></td>
									<td><label htmlFor="user1">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user2" /></td>
									<td><label htmlFor="user2">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user3" /></td>
									<td><label htmlFor="user3">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user4" /></td>
									<td><label htmlFor="user4">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user5" /></td>
									<td><label htmlFor="user5">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user6" /></td>
									<td><label htmlFor="user6">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user7" /></td>
									<td><label htmlFor="user7">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user8" /></td>
									<td><label htmlFor="user8">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user9" /></td>
									<td><label htmlFor="user9">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user10" /></td>
									<td><label htmlFor="user10">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user11" /></td>
									<td><label htmlFor="user11">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
								<tr>
									<td><input type="checkbox" id="user12" /></td>
									<td><label htmlFor="user12">{props.Content.UsrName}</label></td>
									<td>{props.Content.UsrEmail}</td>
									<td>{props.Content.AdminTxt}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
	);
};

export default teamInfoContent;




