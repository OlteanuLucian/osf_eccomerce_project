import React, { useContext, useState } from 'react';
import styles from './CartItem.module.scss';
import { CartContext } from '../Contexts/CartContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const CartItem = ({ item }) => {
	const { delItem, increase, decrease } = useContext(CartContext);

	return (
		<div className={styles.div}>
			<Row>
				<Col md={2}>
					<img src="/img/cart/icon.png" className={styles.img} />
				</Col>
				<Col md={5}>
					<h1 className={styles.title}>{item.title}</h1>
					<p className={styles.smPrice}> $ {item.price}</p>
				</Col>
				<Col md={2} className={styles.row}>
					<InputGroup className={styles.inputGroup}>
						<InputGroup.Prepend>
							<InputGroup.Text className={styles.minus} id="minus" onClick={() => decrease(item.id)}>
								-
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							className={styles.formControl}
							aria-label="quantity"
							aria-describedby="quantity"
							value={` ${item.count}`}
							onChange={(e) => ({
								count: e.target.value.replace(/\D/, '')
							})}
							required
						/>
						<InputGroup.Append>
							<InputGroup.Text className={styles.plus} id="plus" onClick={() => increase(item.id)}>
								+
							</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
				<Col md={2}>
					<p className={styles.bigPrice}> $ {(item.price * item.count).toFixed(2)}</p>
				</Col>
				<Col md={1} className={styles.row1}>
					<button onClick={() => delItem(item.id)} className={styles.btn}>
						<p>x</p>
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default CartItem;
