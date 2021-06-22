import React, { useState } from 'react';
import styles from './Header.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from 'hamburger-react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavIcons from '../NavIcons/';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Arrow = ({ clicked, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<p className={cx(styles.navTitle, styles.navTitleUp)}>Services</p>
			<span>
				<FontAwesomeIcon icon={clicked ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

const productCategories = [
	{ title: 'Accessories' },
	{ title: 'Alcohol' },
	{ title: 'Art' },
	{ title: 'Books' },
	{ title: 'Drink' },
	{ title: 'Electronics' },
	{ title: 'Flowers & Plants' },
	{ title: 'Food' },
	{ title: 'Gadgets' },
	{ title: 'Garden' },
	{ title: 'Grocery' },
	{ title: 'Home' },
	{ title: 'Jewelry' },
	{ title: "Kids & Baby'" },
	{ title: "Men's Fashion" },
	{ title: 'Mobile' },
	{ title: 'Motorcycles' },
	{ title: 'Movies' },
	{ title: 'Music' },
	{ title: 'Office' },
	{ title: 'Pets' },
	{ title: 'Romantic' },
	{ title: 'Sport' },
	{ title: 'Toys' }
];

const firstCol = productCategories.slice(0, 8);
const secondCol = productCategories.slice(8, 16);
const thirdCol = productCategories.slice(16, 25);

const Header = () => {
	const [ clicked, setClicked ] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<header>
			<Container className={styles.container}>
				<Navbar collapseOnSelect expand="lg" className={styles.navbarSm}>
					<Navbar.Toggle aria-controls="responsive-navbar-nav">
						<Hamburger></Hamburger>
					</Navbar.Toggle>
					<Navbar.Brand href="#" className={styles.brand}>
						<Link to="/">
							<img src="./img/header/logo.png" className="d-inline-block align-top mr-2" alt="OSF logo" />
						</Link>
						<div className="d-md-inline-block align-middle d-none">
							<span className={cx(styles.logoText, 'd-block pb-2')}>OSF</span>
							<span className={cx(styles.logoTextSub, 'd-block pt-2')}>Academy</span>
						</div>
					</Navbar.Brand>

					<Navbar.Collapse id="responsive-navbar-nav">
						{/* MOBILE */}

						<Nav className={cx(styles.nav, 'd-xs-flex d-sm-flex d-lg-none align-left')}>
							{' '}
							<Accordion>
								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="0" className={styles.cardHeader}>
										<Arrow clicked={clicked} onClick={handleClick} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body className={styles.cardBody}>
											<Accordion>
												<Card>
													<Accordion.Toggle
														as={Card.Header}
														eventKey="5"
														className={styles.cardHeader}
													>
														<p className={styles.dropSubTitle}>Product Categories</p>
														<span>
															<FontAwesomeIcon icon={faCaretDown} />
														</span>
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="5">
														<Card.Body className={styles.cardBody}>
															{productCategories.map(({ title }) => (
																<p>
																	<Link to="/error">{title}</Link>
																</p>
															))}
														</Card.Body>
													</Accordion.Collapse>
												</Card>
												<Card>
													<Accordion.Toggle
														as={Card.Header}
														eventKey="6"
														className={styles.cardHeader}
													>
														<p className={styles.dropSubTitle}>Sales</p>
														<span>
															<FontAwesomeIcon icon={faCaretDown} />
														</span>
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="6">
														<Card.Body className={styles.cardBody}>
															{firstCol.map(({ title }) => (
																<p>
																	<Link to="/error">{title}</Link>
																</p>
															))}
														</Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
										</Card.Body>
									</Accordion.Collapse>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="1" className={styles.cardHeader}>
										<p className={cx(styles.navTitle, styles.navTitleUp)}>Company</p>
										<span>
											<FontAwesomeIcon icon={faCaretDown} />
										</span>
									</Accordion.Toggle>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="2" className={styles.cardHeader}>
										<p className={cx(styles.navTitle, styles.navTitleUp)}>Library</p>
										<span>
											<FontAwesomeIcon icon={faCaretDown} />
										</span>
									</Accordion.Toggle>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="3" className={styles.cardHeader}>
										<p className={cx(styles.navTitle, styles.navTitleUp)}>Contact us</p>
										<span>
											<FontAwesomeIcon icon={faCaretDown} />
										</span>
									</Accordion.Toggle>
								</Card>
							</Accordion>{' '}
							<img src="/img/header/nav_img.png" rounded className={styles.img} />
						</Nav>

						{/* DESKTOP */}
						<Nav className={cx(styles.nav, 'ml-auto align-middle d-none d-lg-flex')} variant="tabs">
							<NavDropdown
								className={cx(styles.navDropdown, 'position-static')}
								title="SERVICES"
								id="collasible-nav-dropdown"
							>
								<div className={styles.navContainer}>
									<Row className={styles.row}>
										<Col xs={6}>
											<Row>
												<Col>
													<NavDropdown.Header>PRODUCT CATEGORIES</NavDropdown.Header>
												</Col>
											</Row>

											<Row>
												<Col className={styles.col}>
													{firstCol.map(({ title }) => (
														<NavDropdown.Item className={styles.dropdownItem}>
															<Link to="/error">{title}</Link>
														</NavDropdown.Item>
													))}
												</Col>

												<Col className={styles.col}>
													{secondCol.map(({ title }) => (
														<NavDropdown.Item className={styles.dropdownItem}>
															<Link to="/error">{title}</Link>
														</NavDropdown.Item>
													))}
												</Col>

												<Col className={styles.col}>
													{thirdCol.map(({ title }) => (
														<NavDropdown.Item className={styles.dropdownItem}>
															<Link to="/error">{title}</Link>
														</NavDropdown.Item>
													))}
												</Col>
											</Row>
										</Col>

										<Col xs={2}>
											<Row>
												<Col>
													<NavDropdown.Header>SALE</NavDropdown.Header>
												</Col>
											</Row>

											<Row>
												<Col className={styles.col}>
													{firstCol.map(({ title }) => (
														<NavDropdown.Item className={styles.dropdownItem}>
															<Link to="/error">{title}</Link>
														</NavDropdown.Item>
													))}
												</Col>
											</Row>
										</Col>

										<Col xs={3}>
											<img
												src="/img/header/nav_img.png"
												rounded
												className={cx(styles.navImg, 'd-none d-md-block')}
											/>
										</Col>
									</Row>
								</div>
							</NavDropdown>
							<Nav.Item>
								<Nav.Link className={styles.navText} href="#">
									COMPANY
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={styles.navText} href="#">
									LIBRARY
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={styles.navText} href="#">
									CONTACT US
								</Nav.Link>
							</Nav.Item>
							<NavDropdown title="EN" id="collasible-nav-dropdown" className="d-md-block d-none">
								<NavDropdown.Item href="#">RU</NavDropdown.Item>
								<NavDropdown.Item href="#">UA</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="$ US" id="collasible-nav-dropdown" className="d-md-block d-none">
								<NavDropdown.Item href="#">RUB</NavDropdown.Item>
								<NavDropdown.Item href="#">UAN</NavDropdown.Item>
							</NavDropdown>
						</Nav>

						<div className="d-none d-lg-block">
							<NavIcons />
						</div>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
