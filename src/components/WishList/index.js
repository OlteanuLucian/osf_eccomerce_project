import React, { useContext } from 'react';
import { WishContext } from '../Contexts/WishContext';
import styles from './WishList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const WishList = () => {
	const { wishQuantity } = useContext(WishContext);
	return (
		<div>
			<FontAwesomeIcon icon={faHeart} className = {styles.iconSm}/>
			<div className={styles.quantity}>
				<span>{wishQuantity}</span>
			</div>
		</div>
	);
};

export default WishList;
