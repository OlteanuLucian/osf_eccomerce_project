import React, { Component } from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import SocialMedia from '../SocialMedia/';

const Arrow = ({ clicked, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<h2 className={styles.contactTitle}>contact</h2>
			<span>
				<FontAwesomeIcon icon={clicked ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

const Arrow1 = ({ clicked1, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<h2 className={styles.contactTitle}>Categories</h2>
			<span>
				<FontAwesomeIcon icon={clicked1 ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

const Arrow2 = ({ clicked2, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<h2 className={styles.contactTitle}>About</h2>
			<span>
				<FontAwesomeIcon icon={clicked2 ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

const categories = [
	{ title: 'Alcohol' },
	{ title: 'Art' },
	{ title: 'Books' },
	{ title: 'Drink' },
	{ title: 'Electronics' },
	{ title: 'Home' },
	{ title: 'Jewelry' },
	{ title: "Kids & Baby'" },
	{ title: "Men's Fashion" },
	{ title: 'Mobile' },
	{ title: 'Motorcycles' },
	{ title: 'Movies' },
	{ title: 'Music' },
	{ title: 'Sport' },
	{ title: 'Toys' },
	{ title: 'Travel' },
	{ title: "Women's Fashion" }
];

const about = [ { title: 'About us' }, { title: 'Delivery' }, { title: 'Testimonials' }, { title: 'Contact' } ];

const firstCol = categories.slice(0, 5);
const secondCol = categories.slice(5, 13);
const thirdCol = categories.slice(13, 17);
const currentYear= new Date().getFullYear();
export default class Footer extends Component {
	state = { clicked: false, clicked1: false, clicked2: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	handleClick1 = () => {
		this.setState({ clicked1: !this.state.clicked1 });
	};
	handleClick2 = () => {
		this.setState({ clicked2: !this.state.clicked2 });
	};
	
	render() {
		return (
			<footer>
				<Container className={styles.container}>
					{/* MOBILE */}

					<Row className="d-xs-flex d-sm-flex d-md-none">
						<Col className={styles.contactText}>
							<p className={styles.copyright}>
							&copy;Copyright{' '}{currentYear}. <br /> All Rights Reserved.
							</p>
							<Accordion>
								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="0" className={styles.cardHeader}>
										<Arrow clicked={this.state.clicked} onClick={this.handleClick} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body className={styles.cardBody}>
											<p>
												Headquarters: <br /> 5600, Blvd. des Galeries, Bur 530 <br /> Québec,
												Québec G2K 2H6{' '}
											</p>
											<p>
												<a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
											</p>
											<p>
												<a href="tel:18885484344">+1 (888) 548-4344</a>
											</p>
										</Card.Body>
									</Accordion.Collapse>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="1" className={styles.cardHeader}>
										<Arrow1 clicked1={this.state.clicked1} onClick={this.handleClick1} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="1">
										<Card.Body className={styles.cardBody}>
											{categories.map(({ title }) => (
												<div>
													<Link to="/error">{title}</Link> <br />
												</div>
											))}
										</Card.Body>
									</Accordion.Collapse>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="2" className={styles.cardHeader}>
										<Arrow2 clicked2={this.state.clicked2} onClick={this.handleClick2} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="2">
										<Card.Body className={styles.cardBody}>
											{about.map(({ title }) => (
												<div>
													<Link to="/error">{title}</Link> <br />
												</div>
											))}
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>

							<SocialMedia />
						</Col>
					</Row>

					{/* DESKTOP */}

					<Row className="d-none d-md-flex">
						<Col xs={3} className={styles.contactText}>
							<p>
							&copy;Copyright{' '}{currentYear}. <br /> All Rights Reserved.
							</p>
							<h2 className={styles.contactTitle}>contact</h2>
							<p>
								Headquarters: <br /> 5600, Blvd. des Galeries, Bur 530 <br /> Québec, Québec G2K 2H6{' '}
							</p>
							<p>
								<a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
							</p>
							<p>
								<a href="tel:18885484344">+1 (888) 548-4344</a>
							</p>
						</Col>

						<Col xs={6}>
							<Row>
								<Col>
									<h1 className={styles.footTitle}>Categories</h1>
								</Col>
							</Row>
							<Row className={styles.footItem}>
								<Col>
									{firstCol.map(({ title }) => (
										<div className={styles.link}>
											<Link to="/error">{title}</Link> <br />
										</div>
									))}
								</Col>
								<Col>
									{secondCol.map(({ title }) => (
										<div className={styles.link}>
											<Link to="/error">{title}</Link> <br />
										</div>
									))}
								</Col>
								<Col>
									{thirdCol.map(({ title }) => (
										<div className={styles.link}>
											<Link to="/error">{title}</Link> <br />
										</div>
									))}
								</Col>
							</Row>
						</Col>

						<Col xs={1}>
							<Row>
								<Col>
									<h1 className={styles.footTitle}>About</h1>
								</Col>
							</Row>
							<Row className={styles.footItem}>
								<Col>
									{about.map(({ title }) => (
										<div className={styles.link}>
											<Link to="/error">{title}</Link> <br />
										</div>
									))}
								</Col>
							</Row>
						</Col>

						<Col xs={2}>
							<SocialMedia />
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
