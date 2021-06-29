import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/globalStyles/style.scss';
import styles from './CustomCardMain.module.scss';
import Card from 'react-bootstrap/Card';

const CustomCardMain = ({ cardImg, title, price, id }) => {
	

	return (
		<Card className={styles.card} key={id}>
			<Card.Img className={styles.cardImg} variant="top" src={cardImg} />
			<Card.Body className={styles.cardBody}>
				<Link to="/cardigan"><Card.Title className={styles.cardTitle}>{title}</Card.Title></Link>
				<Card.Text className={styles.cardPrice}>$ {price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CustomCardMain;
