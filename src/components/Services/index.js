import React from 'react';
import styles from './Services.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cx from 'classnames';


const Services = () => {
    return ( <div>

<Container className={styles.bg}>

<Row>
    <Col sm={11} md={4}>
    <img src='/img/services/focus.png' className={styles.img} />
    <h1 className={styles.mainText}>Focus</h1>
    <p className={styles.subText}>Our unwavering focus on superior service delivery and building next generation competencies</p>
    </Col>

    <Col sm={11} md={4} className={styles.row}>
    <img src='/img/services/method.png' className={cx(styles.img, styles.right)} />
    <h1 className={styles.mainText}>Method</h1>
    <p className={styles.subText}>A standardized methodology designed to deliver measurable business results and predictable</p>
    </Col>

    <Col sm={11} md={4} className={styles.row}>
    <img src='/img/services/knowledge.png' className={styles.img} />
    <h1 className={styles.mainText}>Knowledge</h1>
    <p className={styles.subText}>A highly skilled, proactive workforce that reliably improves each client’s ROI while mitigating their business</p>
    </Col>
</Row>

</Container>

    </div> );
}
 
export default Services;