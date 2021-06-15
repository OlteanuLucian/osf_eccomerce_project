// import React from 'react';
// import './LoginForm.css';
// import { useState } from 'react';
// import eye from '../Img/eye.webp';

// function Login(props) {
//     const [hidePassword, setHidePassword] = useState(true);
//     const togglePasswordVisiblity = () => {
//         setHidePassword(hidePassword ? false : true);
//       };
//   return (props.trigger) ? (
//     <div className="login">
//       <div className="login-inner">
//         <h3>Sign in</h3><br />
//         <form>
//             <h6>Email</h6>
//             <input type='email' name='email' placeholder='' ></input><br /><br />
//             <div>
//                 <h6></h6>
//                 <h6 className="forgot">forgot password</h6>
//             </div>
//             <div className="passwordInput">
//                 <input type={hidePassword ? "password" : "text"} name='password' placeholder=''></input>
//                 <img className="eye"  onClick={togglePasswordVisiblity} src={eye} alt=''></img>
//             </div>
//         </form>
//         <br /><br />
//         <button className="loginButton" onClick={() => props.setTrigger(false)}><h4>LOGIN</h4></button>
//         <br />
//         <p>I don't have an account</p>
//         {props.children}
//       </div>
//     </div>
//   ) : "";
// }

// export default Login;

import React, { useState } from 'react';
import styles from './LoginForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

const RegistrationForm = () => {
	const [ show, setShow ] = useState(false);
	const [ passwordShown, setPasswordShown ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	return (
		<div>
			<Button onClick={handleShow} className="styleBtnUserLogin">
				<FontAwesomeIcon icon={faUser} />
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Body>
					<h1 className="styleMainTitleLogin">Sign in</h1>
					<Form>
						<Form.Group controlId="formEmail">
							<Form.Label className="styleFormLabelLogin">Email</Form.Label>
							<Form.Control
								type="email"
								pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
								required
								className="styleFormControlLogin"
							/>
						</Form.Group>

						<Form.Group controlId="formPassword">
							<Form.Label className="styleFormLabelLogin">
								<Container>
									<Row>
										<Col className="styleColLogin">
											<span>Lato</span>
										</Col>
										<Col className="styleCol1Login">
											<a href="#" className="styleLinkLogin">
												forgot password
											</a>
										</Col>
									</Row>
								</Container>
							</Form.Label>

							<InputGroup className="styleInputGroupLogin">
								<Form.Control
									type={passwordShown ? 'text' : 'password'}
									className= "styleFormControlLogin stylePassLogin"
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
									required
								/>
								<InputGroup.Append>
									<InputGroup.Text id="hide" className="styleInputGroupTextLogin">
										<FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Form.Group>
						<div className="styleBtnDivLogin">
							<Button onClick={handleClose} className="styleBtnLogin">
								Login
							</Button>
						</div>
					</Form>
					<a href="#" className="styleLinkLogin">
						I don’t have an account
					</a>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default RegistrationForm;
