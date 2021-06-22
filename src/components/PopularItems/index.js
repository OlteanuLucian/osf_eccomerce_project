import React, { useState, useContext, useEffect } from 'react';
import styles from './PopularItems.module.scss';
import myJson from '../cardInformation.json';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CustomCard from '../CustomCard';
import Carousel from 'react-bootstrap/Carousel';
import cx from 'classnames';
import Items from '../Items';
import { CartContext } from '../Contexts/CartContext';

const items = [ ...myJson ];
const itemsPerPage = 4;
let arrayForHoldingItems = [];

const PopularItems = () => {
	const [ itemsToShow, setItemsToShow ] = useState([]);
	const [ next, setNext ] = useState(4);
	const { addItem } = useContext(CartContext);

	const loopWithSlice = (start, end) => {
		const slicedItems = items.slice(start, end);
		arrayForHoldingItems = [ ...arrayForHoldingItems, ...slicedItems ];
		setItemsToShow(arrayForHoldingItems);
	};

	const handleShowMoreItems = () => {
		loopWithSlice(next, next + itemsPerPage);
		setNext(next + itemsPerPage);
	};

	const smItems = items.slice(0, 5);

	return (
		<div>
			<Container className={styles.bg}>
				<Row>
					<Col>
						<h1 className={styles.mainTitle}>
							<span>Popular Items</span>
						</h1>
					</Col>
				</Row>

				<Row className="d-xs-block d-sm-block d-md-none">
					<Carousel prevIcon={null} nextIcon={null} className={styles.carousel}>
						{smItems.map(({ cardImg, title, price, id }) => (
							<Carousel.Item>
								<CustomCard cardImg={cardImg} title={title} price={price} id={id} />
							</Carousel.Item>
						))}
					</Carousel>
				</Row>

				<Row className={cx('d-none d-md-block', styles.firstRow)}>
					<Col>
						<CardColumns>
							<Card>
								<Card.Img className={styles.cardImg} variant="top" src="/img/popularItems/item2.png" />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										<Link to="/cardigan">Hay - About A Lounge Chair AAL 93</Link>
									</Card.Title>
									<Card.Text>
										<button className={styles.cardBtn} onClick={() => addItem()}>
											<span className={styles.cardBtnPrice}>$659.55</span>
											<span className={styles.cardBtnText}>Buy now</span>
										</button>
									</Card.Text>
								</Card.Body>
							</Card>

							<Items itemsToRender={items.slice(0, 6)} />

							<Card className={styles.cardBody}>
								<Card.Img
									className={cx(styles.cardImg, styles.imgDragon)}
									variant="top"
									src="/img/popularItems/item8.png"
								/>
								
								<Card.ImgOverlay>
									<div className={styles.imgContainer}>
										<p className={styles.imgText}>
											My dragons are misbehaving again. Unbelieveable!
										</p>
										<p className={styles.imgTime}>
											<img src="/img/popularItems/img-icon.png" className={styles.imgIcon} />5h
											ago
										</p>
									</div>
								</Card.ImgOverlay>
							</Card>
						</CardColumns>
					</Col>
				</Row>
				<Row className="d-none d-md-block">
					<Col>
						<CardColumns>
							<Items itemsToRender={itemsToShow} />
						</CardColumns>
						<button className={styles.btn} onClick={handleShowMoreItems}>
							load more <FontAwesomeIcon icon={faUndoAlt} className={styles.undo} />
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PopularItems;
