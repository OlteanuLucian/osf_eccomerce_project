import React from 'react';
import styles from './Banner.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
	return (
		<div>
			<Container className={styles.bg}>
				<Row>
					<Col>
						<h1 className={styles.mainText}>Banner OSF Theme</h1>
						<p className={styles.subText}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium{' '}
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Banner;
