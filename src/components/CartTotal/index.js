import React, { useContext, useState } from 'react';
import styles from './CartTotal.module.scss';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../Contexts/CartContext';

const CartTotal = () => {
	const { cartTotal } = useContext(CartContext);
	const [ shipping, setShipping ] = useState(0);

	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Form className={styles.form}>
							<Form.Group controlId="formCoupon">
								<Form.Control type="coupon" placeholder="Enter Coupon Code" className={styles.coupon} />
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<button className={cx(styles.btnWhite, styles.apply)}>Apply</button>
					</Col>
					<Col>
						<button className={cx(styles.btnWhite, styles.updateCart)}>Update cart</button>
					</Col>
					<Col>
						<button className={styles.btnGreen}>Proceed To CHECKOUT</button>
					</Col>
				</Row>

				<Row className={styles.row}>
					<Col lg={{ offset: 6 }}>
						<span className={styles.subTotal}>cart subtotal:</span>
					</Col>
					<Col className={styles.price}>$ {cartTotal}</Col>
				</Row>

				<Row className={styles.row}>
					<Col lg={{ offset: 6 }}>
						<span className={styles.total}>SHIPPING AND HANDLING:</span>
					</Col>
					<Col>
						<div className={styles.radio} onChange={(e) => setShipping(e.target.value)}>
							<input type="radio" id="shipping1" name="shipping" value="10" />
							<label for="shipping1">
								Flat Rate: <span className={styles.price}>$10.00</span>
							</label>{' '}
							<br />
							<input type="radio" id="shipping2" name="shipping" value="0" />
							<label for="shipping2">Free Shipping</label> <br />
							<input type="radio" id="shipping3" name="shipping" value="60" />
							<label for="shipping3">
								International: <span className={styles.price}>$60.00</span>
							</label>{' '}
							<br />
							<input type="radio" id="shipping4" name="shipping" value="5" />
							<label for="shipping4">
								Local Delivery: <span className={styles.price}>$5.00</span>
							</label>{' '}
							<br />
							<input type="radio" id="shipping5" name="shipping" value="0" />
							<label for="shipping5">Local Pickup (Free)</label> <br />
						</div>
					</Col>
				</Row>

				<Row className={cx(styles.row, styles.lastRow)}>
					<Col lg={{ offset: 6 }}>
						<span className={cx(styles.total, styles.orderTotal)}>ORDER TOTAL:</span>
					</Col>
					<Col className={styles.mainPrice}>$ {+cartTotal + +shipping}</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CartTotal;
