import React from 'react';
import styles from './NotFound.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const NotFound = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Breadcrumb className={styles.breadcrumb}>
							<Breadcrumb.Item>
								<Link to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>404</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>

				<Row>
					<Col>
						<h1 className={styles.mainTitle}>404</h1>
					</Col>
				</Row>

				<Row className={styles.bg}>
					<Col>
						<h1 className={styles.bigTitle}>Oops!</h1>
						<img src="/img/notFound/warning.png" alt="warning" className={styles.img} />
					</Col>
					<Col md={7} className={styles.col}>
						<h3 className={styles.subTitle}>Sorry, this page could not be found!</h3>
						<p className={styles.description}>
							Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus.
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa.{' '}
							</p>
						</p>
						<p className={styles.link}>
							<Link to="/">Go back to Homepage</Link>
						</p>

						<div>
							<p className={styles.searchTitle}>Search our site</p>
							<InputGroup className="mb-3" className={styles.inputGroupMain}>
								<FormControl
									placeholder="Search"
									aria-label="Search"
									aria-describedby="search"
									className={styles.formControl}
								/>
								<InputGroup.Append>
									<InputGroup.Text id="search" className={styles.inputGroup}>
										<FontAwesomeIcon icon={faSearch} />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default NotFound;
