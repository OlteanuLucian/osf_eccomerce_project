import React from 'react';
import styles from './IconsFooter.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavIcons from '../NavIcons/';
import Navbar from 'react-bootstrap/Navbar';

const IconsFooter = () => {
	return (
		<div className="d-xs-flex d-sm-flex d-lg-none">
			<Container className={styles.bg}>
				<Navbar className={styles.navbar}>
					<NavIcons />
				</Navbar>
			</Container>
		</div>
	);
};

export default IconsFooter;
