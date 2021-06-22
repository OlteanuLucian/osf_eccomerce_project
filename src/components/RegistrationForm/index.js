import React, { useState } from 'react';
import styles from './RegistrationForm.module.scss';
import cx from 'classnames';
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
			<Button onClick={handleShow} className={styles.btnUser}>
				<FontAwesomeIcon icon={faUser} />
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Body>
					<h1 className={styles.mainTitle}>Sign in</h1>
					<Form>
						<Form.Group controlId="formEmail">
							<Form.Label className={styles.formLabel}>Email</Form.Label>
							<Form.Control
								type="email"
								pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
								required
								className={styles.formControl}
							/>
						</Form.Group>

						<Form.Group controlId="formPassword">
							<Form.Label className={styles.formLabel}>
								<Container>
									<Row>
										<Col className={styles.col}>
											<span>Lato</span>
										</Col>
										<Col className={styles.col1}>
											<a href="#" className={styles.link}>
												forgot password
											</a>
										</Col>
									</Row>
								</Container>
							</Form.Label>

							<InputGroup className={styles.inputGroup}>
								<Form.Control
									type={passwordShown ? 'text' : 'password'}
									className={cx(styles.formControl, styles.pass)}
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
									required
								/>
								<InputGroup.Append>
									<InputGroup.Text id="hide" className={styles.inputGroupText}>
										<FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Form.Group>
						<div className={styles.btnDiv}>
							<Button onClick={handleClose} className={styles.btn}>
								Login
							</Button>
						</div>
					</Form>
					<a href="#" className={styles.link}>
						I don’t have an account
					</a>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default RegistrationForm;
