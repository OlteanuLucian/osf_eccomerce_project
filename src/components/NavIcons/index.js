import React from 'react';
import styles from './NavIcons.module.scss';
import Nav from 'react-bootstrap/Nav';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RegistrationForm from '../RegistrationForm/';
import WishList from '../WishList/';
import CartNavList from '../CartNavList/';

const NavIcons = () => {
	return (
		<Nav className="ml-5" className={styles.nav}>
			<Nav.Item>
				<Nav.Link className={styles.navIcons} href="#">
					<FontAwesomeIcon icon={faSearch} className = {styles.iconSm}/>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className={styles.navIcons} href="#">
					<RegistrationForm />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className={styles.navIcons} href="#">
					<WishList />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link className={styles.navIcons} href="#">
					<CartNavList />
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavIcons;
