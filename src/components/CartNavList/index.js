import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import styles from './CartNavList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartNavList = () => {
	const { itemsQuantity } = useContext(CartContext);
	return (
		<div>
			<Link to="/checkout" className={styles.link}>
				<FontAwesomeIcon icon={faShoppingBag} className = {styles.iconSm} />
				<div className={styles.quantity}>
					<span>{itemsQuantity}</span>
				</div>
			</Link>
		</div>
	);
};

export default CartNavList;
