import React, { Component } from 'react';
import styles from './FeaturedProducts.module.scss';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class FeaturedProducts extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false
		};

		const cards = [
			{
				img: '/img/featuredProducts/prod1.png',
				title: 'Kristina Dam Oak Table With White Marble',
				text: 'Awesome'
			},
			{
				img: '/img/featuredProducts/prod2.png',
				title: 'Kristina Dam Oak Table With White Marble',
				text: 'Marketing'
			},
			{
				img: '/img/featuredProducts/prod3.png',
				title: 'Kristina Dam Oak Table With White Marble',
				text: 'Awesome'
			},
			{
				img: '/img/featuredProducts/prod4.png',
				title: 'Hezy Theme',
				text: 'Marketing'
			},
			{
				img: '/img/featuredProducts/prod2.png',
				title: 'Kristina Dam Oak Table With White Marble',
				text: 'Marketing'
			}
		];

		return (
			<div className={styles.products}>
				<Container className={styles.bg}>
					<Row>
						<Col>
							<h1 className={styles.mainText}>Featured Products</h1>
							<p className={styles.subText}>Unde omnis iste natus error sit voluptatem</p>
							<div className={styles.border}>
								<img src="/img/featuredProducts/icon.png" />
							</div>
							<img onClick={this.previous} src="/img/featuredProducts/prev.png" className={styles.prev} />
							<img onClick={this.next} src="/img/featuredProducts/next.png" className={styles.next} />
						</Col>
					</Row>

					<Row className={styles.secondRow}>
						<Col>
							<Slider ref={(c) => (this.slider = c)} {...settings} slickPrev={null}>
								{cards.map(({ img, title, text }) => (
									<div>
										<Card className={styles.card}>
											<Link to="/cardigan">
												<Card.Img className={styles.cardImg} variant="top" src={img} />
												<Card.Body className={styles.cardHeight}>
													<Card.Title className={styles.cardMainText}>{title}</Card.Title>
													<Card.Text className={styles.cardSubText}>{text}</Card.Text>
												</Card.Body>
											</Link>
										</Card>
									</div>
								))}
							</Slider>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
