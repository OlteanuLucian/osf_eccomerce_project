import React from 'react';
import styles from './TabsList.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const TabsList = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col className={styles.col}>
						<Tabs defaultActiveKey="description" id="tabs" className={styles.tabs}>
							<Tab eventKey="description" title="Description" className={styles.tab}>
								<Row>
									<Col md={6}>
										Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
										magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit
										amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
										massa.{' '}
									</Col>
									<Col md={6}>
										Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
										mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
										consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
										vulputate eget, arcu.
									</Col>
								</Row>
							</Tab>
							<Tab eventKey="information" title="Additional Information" className={styles.tab}>
								<Row>
									<Col md={6}>
										In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
										felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
										semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
										consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
										quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
										Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.{' '}
									</Col>
									<Col md={6}>
										Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
										tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
										adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
										hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
										sapien ut libero venenatis faucibus.
									</Col>
								</Row>
							</Tab>
							<Tab eventKey="reviews" title="Reviews (3)" className={styles.tab}>
								<Row>
									<Col md={6}>
										Say that thou didst forsake me for some fault, And I will comment upon that
										offence: Speak of my lameness, and I straight will halt, Against thy reasons
										making no defence. Thou canst not love disgrace me half so ill, To set a form
										upon desired change, As I'll myself disgrace; knowing thy will, I will
										acquaintance strangle, and look strange; Be absent from thy walks; and in my
										tongue Thy sweet beloved name no more shall dwell,
									</Col>
									<Col md={6}>
										In loving thee thou know'st I am forsworn, But thou art twice forsworn, to me
										love swearing; In act thy bed-vow broke, and new faith torn, In vowing new hate
										after new love bearing: But why of two oaths' breach do I accuse thee, When I
										break twenty? I am perjur'd most; For all my vows are oaths but to misuse thee,
										And all my honest faith in thee is lost: For I have sworn deep oaths of thy deep
										kindness, Oaths of thy love, thy truth, thy constancy;
									</Col>
								</Row>
							</Tab>
						</Tabs>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TabsList;
