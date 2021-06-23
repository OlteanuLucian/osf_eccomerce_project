import React from 'react';
import styles from './SocialMedia.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SocialMedia = () => {
	return (
		<Row className={styles.icons}>
			<Col>
				<a href="https://www.facebook.com/">
					<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} className={styles.icon} />
				</a>
				<a href="https://www.google.com.ua/">
					<FontAwesomeIcon icon={[ 'fab', 'google-plus-g' ]} className={styles.icon} />
				</a>
				<a href="https://twitter.com/">
					<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} className={styles.icon} />
				</a>
				<a href="https://www.pinterest.com/">
					<FontAwesomeIcon icon={[ 'fab', 'pinterest-p' ]} />
				</a>
			</Col>
		</Row>
		
	);
};

export default SocialMedia;
