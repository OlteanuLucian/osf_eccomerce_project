import React from 'react';
import styles from './Filter.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const Filter = () => {
	return (
		<Container>
			<div className={styles.bg}>
				<Row className={styles.row} xs={1} md={3}>
					<Col>
						<Row className={styles.row}>
							<Col>
								<span className={styles.dropTitle}>Price</span>
							</Col>
							<Col className={styles.col}>
								<Dropdown className={styles.dropdown} as={ButtonGroup}>
									<Button className={styles.btnDrop}>$0.00 — $100.00</Button>
									<Dropdown.Toggle split id="dropdown-basic" className={styles.toggle} />

									<Dropdown.Menu>
										<Dropdown.Item href="#">$100.00 — $200.00</Dropdown.Item>
										<Dropdown.Item href="#">$300.00 — $700.00</Dropdown.Item>
										<Dropdown.Item href="#">$700.00 — $1000.00</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
						<Row className={styles.smRow}>
							<Col>
								<span className={styles.dropTitle}>Color</span>
							</Col>
							<Col className={styles.col}>
								<div className={styles.btnAll}>
									<button className={styles.btnWhite} />
									<button className={styles.btnLightBlue} />
									<button className={styles.btnBlack} />
									<button className={styles.btnGreen} />
									<button className={styles.btnBlue} />
									<button className={styles.btnOrange} />
									<button className={styles.btnRed} />
									<button className={styles.btnBeige} />
								</div>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row className={styles.row}>
							<Col>
								<span className={styles.dropTitle}>Brands</span>
							</Col>
							<Col className={styles.col}>
								<Dropdown className={styles.dropdown} as={ButtonGroup}>
									<Button className={styles.btnDrop}>Ukraine sport</Button>
									<Dropdown.Toggle split id="dropdown-basic" className={styles.toggle} />

									<Dropdown.Menu>
										<Dropdown.Item href="#">Swedish sport</Dropdown.Item>
										<Dropdown.Item href="#">Russian sport</Dropdown.Item>
										<Dropdown.Item href="#">American sport</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
						<Row className={styles.smRow}>
							<Col>
								<span className={styles.dropTitle}>Sort by</span>
							</Col>
							<Col className={styles.col}>
								<Dropdown className={styles.dropdown} as={ButtonGroup}>
									<Button className={styles.btnDrop}>Price</Button>
									<Dropdown.Toggle split id="dropdown-basic" className={styles.toggle} />

									<Dropdown.Menu>
										<Dropdown.Item href="#">Name</Dropdown.Item>
										<Dropdown.Item href="#">Class</Dropdown.Item>
										<Dropdown.Item href="#">Origin</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row className={styles.row}>
							<Col>
								<span className={styles.dropTitle}>Size</span>
							</Col>
							<Col className={styles.col}>
								<Dropdown className={styles.dropdown} as={ButtonGroup}>
									<Button className={styles.btnDrop}>Small</Button>
									<Dropdown.Toggle split id="dropdown-basic" className={styles.toggle} />

									<Dropdown.Menu>
										<Dropdown.Item href="#">Medium</Dropdown.Item>
										<Dropdown.Item href="#">Big</Dropdown.Item>
										<Dropdown.Item href="#">Very Big</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
						<Row className={styles.smRow}>
							<Col>
								<span className={styles.dropTitle}>Show</span>
							</Col>
							<Col className={styles.col}>
								<Dropdown className={styles.dropdown} as={ButtonGroup}>
									<Button className={styles.btnDrop}>16 per page</Button>
									<Dropdown.Toggle split id="dropdown-basic" className={styles.toggle} />

									<Dropdown.Menu>
										<Dropdown.Item href="#">26 per page</Dropdown.Item>
										<Dropdown.Item href="#">46 per page</Dropdown.Item>
										<Dropdown.Item href="#">66 per page</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Filter;
