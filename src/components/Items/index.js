import React, { useContext } from 'react';
import { WishContext } from '../Contexts/WishContext';
import { CartContext } from '../Contexts/CartContext';
import '../../assets/globalStyles/style.scss';
import styles from './Items.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const Items = ({ itemsToRender }) => {
	const { addWish } = useContext(WishContext);
	const { addItem, addItemCart } = useContext(CartContext);

	return (
		<div>
			{itemsToRender.map(({ title, price, cardImg, id }) => (
				<Card className={styles.card} key={id}>
					<Card.Img className={styles.cardImg} variant="top" src={cardImg} />
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>{title}</Card.Title>
						<Card.Text className={styles.cardPrice}>$ {price}</Card.Text>
					</Card.Body>
					<div className={styles.overlay}>
						<div className={styles.plus} onClick={() => addItem()}>
							<div onClick={() => addItemCart(id)}>
								<FontAwesomeIcon icon={faPlus} />
							</div>
						</div>
						<div className={styles.heart} onClick={() => addWish()}>
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
				</Card>
			))}
		</div>
	);
};

export default Items;
