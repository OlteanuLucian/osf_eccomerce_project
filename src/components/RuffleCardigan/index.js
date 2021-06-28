import React, { useState, useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import styles from './RuffleCardigan.module.scss';
import TabsList from '../TabsList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import SocialMedia from '../SocialMedia/';

const RuffleCardigan = () => {
	const [ curImg, setImg ] = useState('/img/cardigans/black.jpg');
	const [ isExpanded, setExpanded ] = useState(false);
	const [ count, setCount ] = useState(1);
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { addItemQuantity } = useContext(CartContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		addItemQuantity(count);
		setCount('');
	};

	let productDescription =
		'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false
	};

	const products = [
		{
			smImg: '/img/cardigans/black_sm.jpg',
			bigImg: 'img/cardigans/black.jpg'
		},
		{
			smImg: '/img/cardigans/black_back_sm.jpg',
			bigImg: 'img/cardigans/black_back.jpg'
		},
		{
			smImg: '/img/cardigans/mint_sm.jpg',
			bigImg: 'img/cardigans/mint.jpg'
		},
		{
			smImg: '/img/cardigans/mint_back_sm.jpg',
			bigImg: 'img/cardigans/mint_back.jpg'
		}
	];

	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Breadcrumb className={styles.breadcrumb}>
							<Breadcrumb.Item>
								<Link to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<Link to="/categories">OSF Theme</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>Ruffle Front V-Neck Cardigan</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>

				<Row>
					<Col className="d-none d-md-block">
						<h1 className={styles.mainTitle}>Ruffle Front V-Neck Cardigan</h1>
					</Col>
					<Col className="d-xs-block d-sm-block d-md-none">
						<h1 className={styles.mainTitle}>V-Neck Cardigan</h1>
					</Col>
				</Row>

				<div className={styles.bg}>
					<div className={styles.containerProduct}>
						<Row className={styles.row}>
							<Col xs={12} md={5}>
								<FontAwesomeIcon
									icon={faExpandArrowsAlt}
									className={styles.expandArrows}
									onClick={handleShow}
								/>

								<img
									src={curImg}
									id="currentImg"
									alt="Cardigan"
									title="Cardigan"
									className={styles.bigImg}
								/>
							</Col>
							<Col md={3} className="d-none d-md-block">
								<ul className={styles.colorPicker}>
									{products.map(({ smImg, bigImg }) => (
										<li>
											<img src={smImg} alt="" onClick={() => setImg(bigImg)} />
										</li>
									))}
								</ul>
							</Col>
							<Col className="d-xs-block d-sm-block d-md-none">
								<Slider {...settings} className={styles.colorPicker}>
									{products.map(({ smImg, bigImg }) => (
										<div>
											<img src={smImg} alt="" onClick={() => setImg(bigImg)} />
										</div>
									))}
								</Slider>
							</Col>
							<Col>
								<Row>
									<Col>
										<p className={styles.price}>$299.99</p>
									</Col>
								</Row>

								<Row>
									<Dropdown className={styles.dropdown} as={ButtonGroup}>
										<Button className={styles.btnDrop}>
											<button className={styles.greyClr} />Dark Grey
										</Button>
										<Dropdown.Toggle split id="dropdown-basic" className={styles.toggle} />

										<Dropdown.Menu>
											<Dropdown.Item href="#">
												<button className={styles.redClr} />Red
											</Dropdown.Item>
											<Dropdown.Item href="#">
												<button className={styles.orangeClr} />Orange
											</Dropdown.Item>
											<Dropdown.Item href="#">
												<button className={styles.mintClr} />Mint
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Row>

								<Row>
									<form onSubmit={handleSubmit} className={styles.formStyle}>
										<Col xs={12} md={6} className={styles.col}>
											<InputGroup className={styles.inputGroup}>
												<InputGroup.Prepend>
													<InputGroup.Text
														className={styles.minus}
														id="minus"
														onClick={() => setCount(count - 1)}
													>
														-
													</InputGroup.Text>
												</InputGroup.Prepend>
												<FormControl
													className={styles.formControl}
													placeholder={` ${count}`}
													aria-label="quantity"
													aria-describedby="quantity"
													value={` ${count}`}
													onChange={(e) => ({
														count: e.target.value.replace(/\D/, '')
													})}
													onChange={(e) => setCount(e.target.value)}
													required
												/>
												<InputGroup.Append>
													<InputGroup.Text
														className={styles.plus}
														id="plus"
														onClick={() => setCount(count + 1)}
													>
														+
													</InputGroup.Text>
												</InputGroup.Append>
											</InputGroup>
										</Col>
										<Col>
											<input className={styles.cartBtn} type="submit" value="Add to cart" />
										</Col>
									</form>
								</Row>

								<Row>
									<Col>
										<p className={styles.description}>
											{!isExpanded ? (
												<div>{`${productDescription.substring(0, 100)}...`}</div>
											) : (
												<p>{productDescription}</p>
											)}
										</p>
										<p className={styles.readMore} onClick={() => setExpanded(true)}>
											Read more
										</p>
									</Col>
								</Row>

								<div className={styles.icons}>
									<span className={styles.share}>Share</span>
									<SocialMedia />
								</div>
							</Col>
						</Row>
					</div>
					<div className="d-none d-md-block">
						<TabsList />
					</div>
				</div>
			</Container>

			<Modal show={show} onHide={handleClose} centered size="md">
				<Modal.Body>
					<img src={curImg} id="currentImg" alt="Cardigan" title="Cardigan" className={styles.bigImgModal} />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default RuffleCardigan;
