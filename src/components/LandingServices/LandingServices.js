import React, {useState, useEffect} from 'react'
import "./LandingServices.css";
import {Link} from "react-router-dom";
import myJson from "../cardInformation.json";
import Filter from "../Filter/Filter.js";
import Items from "../Items/Items.js"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb  from "react-bootstrap/Breadcrumb";
import CardColumns from "react-bootstrap/CardColumns";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"; 



const items = [...myJson];
const itemsPerPage  = 4;
let arrayForHoldingItems = [];


const LandingServices = () => {
    const [itemsToShow,setItemsToShow] = useState([]);
    const [next, setNext] = useState (2);

    const loopWithSlice = (start, end) => {
        const slicedItems = items.slice (start, end);
        arrayForHoldingItems = [...arrayForHoldingItems, ...slicedItems];
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
           <Container className = "mainContainerServices">
               <Row>
                   <Col className = "landingS">
                        <Breadcrumb className = "breadcrumbServices">
                            <Breadcrumb.Item>
                                <Link to ="/home">Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Category Landing Services</Breadcrumb.Item>
                        </Breadcrumb>
                   </Col>
               </Row>

               <Row>
                   <Col className = "landingS">
                        <h1 className = "mainTitleServices">Services</h1>
                   </Col>
               </Row>

                <Row className = "d-xs-flex d-sm-flex d-md-none">
                    <Col className = "landingS">
                        <Accordion defaultActiveKey = "0">
                            <Card className = "styleCard">
                                <Card.Header className = "styleCardHeader">
                                    <Accordion.Toggle variant="link" eventKey = "0">
                                        Filter
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className = "styleCardBody">
                                        <Filter />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>

                <div className = "d-none d-md-flex">
                    <Filter/>
                </div>

                <Row>
                    <Col className = "landingS">
                        <p className = "styleResults">
                            <span className = "styleResultsNum">12,931</span> results in apparel
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className = "d-none d-md-flex">
                        <CardColumns className = "styleCardColumns">
                            <Items itemsToRender={itemsToShow}/>
                        </CardColumns>
                    </Col>

                    <Col className = "d-xs-flex d-sm-flex d-md-none">
                        <CardColumns className = "styleCardColumns">
                            <Items itemsToRender={smItems}/>
                        </CardColumns>
                    </Col>
                </Row>
                <Row>
					<Col className = "landingS">
						<button className="styleBtn" onClick={handleShowMoreItems}>
							load more
						</button>
					</Col>
				</Row>
            </Container> 
        </div>
    )
}

export default LandingServices;


