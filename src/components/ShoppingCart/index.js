import React from 'react';
import styles from './ShoppingCart.module.scss';
import { Link } from 'react-router-dom';
import CartItemsList from '../CartItemsList/';
import CartTotal from '../CartTotal/';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const ShoppingCart = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Breadcrumb className={styles.breadcrumb}>
							<Breadcrumb.Item>
								<Link to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>

				<Row>
					<Col>
						<h1 className={styles.title}>SHOPPING CART</h1>
					</Col>
				</Row>

				<Row>
					<Col>
						<div className={styles.bg}>
							<CartItemsList />
							<CartTotal />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ShoppingCart;
