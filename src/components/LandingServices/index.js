import React, { useState, useEffect } from 'react';
import styles from './LandingServices.module.scss';
import myJson from '../cardInformation.json';
import Filter from '../Filter';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardColumns from 'react-bootstrap/CardColumns';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Items from '../Items';

const items = [ ...myJson ];
const itemsPerPage = 4;
let arrayForHoldingItems = [];

const LandingServices = () => {
	const [ itemsToShow, setItemsToShow ] = useState([]);
	const [ next, setNext ] = useState(4);

	const loopWithSlice = (start, end) => {
		const slicedItems = items.slice(start, end);
		arrayForHoldingItems = [ ...arrayForHoldingItems, ...slicedItems ];
		setItemsToShow(arrayForHoldingItems);
	};

	useEffect(() => {
		loopWithSlice(0, 16);
	}, []);

	const handleShowMoreItems = () => {
		loopWithSlice(next, next + itemsPerPage);
		setNext(next + itemsPerPage);
	};

	const smItems = items.slice(0, 4);

	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Breadcrumb className={styles.breadcrumb}>
							<Breadcrumb.Item>
								<Link to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>Category Landing Services</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>

				<Row>
					<Col>
						<h1 className={styles.mainTitle}>Services</h1>
					</Col>
				</Row>

				<Row className="d-xs-flex d-sm-flex d-md-none">
					<Col>
						<Accordion defaultActiveKey="0">
							<Card className={styles.card}>
								<Card.Header className={styles.cardHeader}>
									<Accordion.Toggle variant="link" eventKey="0">
										Hide Filter
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="0">
									<Card.Body className={styles.cardBody}>
										<Filter />
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>

				<div className="d-none d-md-flex">
					<Filter />
				</div>

				<Row>
					<Col>
						<p className={styles.results}>
							<span className={styles.resultNum}>12,931</span> results in apparel
						</p>
					</Col>
				</Row>

				<Row>
					<Col className="d-none d-md-flex">
						<CardColumns className={styles.cardColumns}>
							<Items itemsToRender={itemsToShow} />
						</CardColumns>
					</Col>

					<Col className="d-xs-flex d-sm-flex d-md-none">
						<CardColumns className={styles.cardColumns}>
							<Items itemsToRender={smItems} />
						</CardColumns>
					</Col>
				</Row>

				<Row>
					<Col>
						<button className={styles.btn} onClick={handleShowMoreItems}>
							load more
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default LandingServices;
