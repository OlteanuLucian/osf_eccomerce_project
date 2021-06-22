import React from 'react';
import styles from './Sales.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const pages = [
	{
		title: 'Control and manage any device with cloud solutions',
		text:
			'Improve business performance and the user experience with the right mix of IoT technology and processes doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed'
	}
];

const Sales = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Row>
					{/* MOBILE */}

					<Col xs={12} className={cx(styles.colSm, 'd-xs-block d-sm-block d-md-none')}>
						<Carousel prevIcon={null} nextIcon={null}>
							{pages.map(({ title, text }) => (
								<Carousel.Item className={styles.carouselItem}>
									<img className="d-block w-100" src="/img/sales/bg-sm.png" alt="First slide" />
									<Carousel.Caption className={styles.caption}>
										<h3 className={cx(styles.titleCarousel, styles.leftCarousel)}>{title}</h3>
										<p className={cx(styles.subTitleCarousel, styles.leftCarousel)}>{text}</p>
										<Link to="/categories">
											<button className={cx(styles.btnCarousel, styles.middleBtnCarousel)}>
												View more
											</button>
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>
					</Col>

					{/* DESKTOP */}

					<Col lg={9} className={cx(styles.colBg, 'd-none d-md-block')}>
						<Carousel prevIcon={null} nextIcon={null}>
							<Carousel.Item>
								<img
									className={cx(styles.imgBg, 'd-block w-100')}
									src="/img/sales/sales-bg.png"
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.leftCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.leftCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<Link to="/categories">
										<button className={cx(styles.btnCarousel, styles.leftBtnCarousel)}>
											View more
										</button>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className={cx(styles.imgBg, 'd-block w-100')}
									src="/img/sales/sales-bg1.png"
									alt="Second slide"
								/>
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.middleCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.middleCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<Link to="/categories">
										<button className={cx(styles.btnCarousel, styles.middleBtnCarousel)}>
											View more
										</button>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className={cx(styles.imgBg, 'd-block w-100')}
									src="/img/sales/sales-bg2.png"
									alt="Third slide"
								/>
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.rightCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.rightCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<Link to="/categories">
										<button className={cx(styles.btnCarousel, styles.rightBtnCarousel)}>
											View more
										</button>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className={cx(styles.imgBg, 'd-block w-100')}
									src="/img/sales/sales-bg.png"
									alt="Fourth slide"
								/>
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.leftCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.leftCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<Link to="/categories">
										<button className={cx(styles.btnCarousel, styles.leftBtnCarousel)}>
											View more
										</button>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item>
								<img
									className={cx(styles.imgBg, 'd-block w-100')}
									src="/img/sales/sales-bg1.png"
									alt="Fifth slide"
								/>
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.middleCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.middleCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<Link to="/categories">
										<button className={cx(styles.btnCarousel, styles.middleBtnCarousel)}>
											View more
										</button>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>

					<Col className={styles.secondCol}>
						<Card>
							<Card.Img variant="top" src="/img/sales/summer-sales.png" className={styles.imgSales} />
							<Card.Body>
								<Card.Title>
									<span className={styles.titleSales}>Follow us on Facebook</span>
								</Card.Title>
								<Card.Text>
									<span className={styles.subTitleSales}>
										Sed ut perspiciatis unde omnis iste natus error sit
									</span>
								</Card.Text>
								<form>
									<button className={styles.btnSales} formaction="https://www.facebook.com/">
										<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} className={styles.fb} />FOLLOW
									</button>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Sales;
