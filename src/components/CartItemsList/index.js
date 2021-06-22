import React, { useContext } from 'react';
import CartItem from '../CartItem/';
import styles from './CartItemsList.module.scss';
import { CartContext } from '../Contexts/CartContext';

const CartItemsList = () => {
	const { items } = useContext(CartContext);
	return (
		<div className={styles.div}>
			{items.length ? (
				<div className="todo-list">
					<h3>
						{items.map((item) => {
							return <CartItem item={item} key={item.id} />;
						})}
					</h3>
				</div>
			) : (
				<div className={styles.emtyList}>
					<h3> Nothing yet in here... </h3>
				</div>
			)}
		</div>
	);
};

export default CartItemsList;
