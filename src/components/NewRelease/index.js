import React, {useEffect, useState, useRef} from 'react';
import styles from './NewRelease.module.scss';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';


function NewRelease  () {

    const [timerMonths, setTimerMonths] = useState('00');
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date ('Jun 30, 2021 15:00:00').getTime();

        interval = setInterval(()=>{
            const timeNow = new Date().getTime();

            const timeLeft = countdownDate - timeNow;
            
            const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor(timeLeft / (1000*60*60*24));
            const hours = Math.floor((timeLeft % (1000*60*60*24) / (1000*60*60)));
            const minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((timeLeft % (1000*60)) / 1000);



            if (timeLeft < 0) {
                clearInterval(interval.current);
            } else {
                setTimerMonths(months);
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(()=>{
        const refTime = interval.current
        startTimer()
        return () => {
            clearInterval (refTime)
        }
    }, [])



    return (
        <div>
            <Container className = {styles.container}>
                
                <Row className =  {styles.bg}>
                    <Col>
                        <h1 className = {styles.mainTitle}>
                            We Will Release OSF Academy
                        </h1>                    
                        <h3 className = {styles.subTitle}>
                            We are working hard and estimated release time products below. <br/>
                            Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non lectus imperdiet.
                        </h3>
                    </Col>
                </Row>
                   

                <Row className =  {styles.bg2}>
                
                <Col>   
                    <button className={styles.circle}>{timerMonths}</button>
                    <h4 className={styles.textData}>Months</h4>
                </Col>
                
                
                <Col>
                    <button className={styles.circle}>{timerDays}</button>
                    <h4 className={styles.textData}>Days</h4>
                </Col>
                <Col>
                    <button className={styles.circle}>{timerHours}</button>
                    <h4 className={styles.textData}>Hours</h4>
                </Col>
                <Col>
                    <button className={styles.circle}>{timerMinutes}</button>
                    <h4 className={styles.textData}>Minutes</h4>
                </Col>
                <Col>
                    <button className={styles.circle}>{timerSeconds}</button>
                    <h4 className={styles.textData}>Seconds</h4>
                </Col>
                



                    
                    
                </Row>


                    <Row className =  {styles.bg3}>          
                        <Col>                     
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
                    </Col>
                    </Row>
               
                
            </Container>

        </div>
    )
}

export default NewRelease;
