import React from 'react';
import styles from './NewRelease.module.scss';
import { Link } from 'react-router-dom';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function NewRelease  () {
    return (
        <div>
            <Container className = {styles.container}>
                <Row className = {styles.bg}>
                    <Col>
                        <h1 className = {styles.mainTitle}>
                            We Will Release OSF Academy
                        </h1>
                    
                                            <h3 className = {styles.subTitle}>
                            We are working hard and estimated release time products below. <br/>
                            Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non lectus imperdiet.
                        </h3>
                    </Col>

                    <div className ={styles.circleContainer}>
                        <button className={styles.circle}>timerMonths</button>
                        <button className={styles.circle}>timerDays</button>
                        <button className={styles.circle}>timerHours</button>
                        <button className={styles.circle}>timerMinutes</button>
                        <button className={styles.circle}>timerSeconds</button>
                        <h4 className={styles.textData}>Months</h4>
                        <h4 className={styles.textData}>Days</h4>
                        <h4 className={styles.textData}>Hours</h4>
                        <h4 className={styles.textData}>Minutes</h4>
                        <h4 className={styles.textData}>Seconds</h4>
                    </div>

                    <div className={styles.inputMain}>
                        <InputGroup className="mb-3" className={styles.inputGroupMain}>
                            <FormControl
                                type="email"
                                placeholder = "Enter your email to receive the latest announcements"
                                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                required
                                className={styles.formControl}
                            />
                            
                            <InputGroup.Append>
									<InputGroup.Text id="submit" className={styles.inputGroup}>
										<FontAwesomeIcon icon={faAngleRight} />
									</InputGroup.Text>
							</InputGroup.Append>
                        </InputGroup>
                    </div>
                </Row>

                <Row>
                    
                </Row>
            </Container>

        </div>
    )
}

export default NewRelease;
