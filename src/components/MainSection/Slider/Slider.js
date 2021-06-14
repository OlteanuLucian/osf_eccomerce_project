import React from "react";
import {Carousel}  from "react-bootstrap";
import "./Slider.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Img1 from "../../Img/Desktop/Slider/img1.png";
import Img2 from "../../Img/Desktop/Slider/img2.png";
import Img3 from "../../Img/Desktop/Slider/img3.png";
import salesImage from "../../Img/Main/summer-sales.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Slider () {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    
    return(

       <div>
           <Container className="mainContainer">
        <Row>

        <Col lg={9} className = "colBg d-none d-md-block">

            <Carousel activeIndex={index} onSelect={handleSelect} prevIcon = {null} nextIcon = {null}>
                <Carousel.Item>
                    <img className = "imgBg d-block w-100" 
                         src={Img1} 
                         alt=""/>
                    <Carousel.Caption>
                        <h3 className = "titleCarousel leftCarousel">
                            {' '}
                            Control and manage any device with cloud solutions
                        </h3>
                        <p className = "subTitleCarousel leftCarousel">Improve business performance and the user experience with the right mix of IoT
						    technology and processes
                        </p>
                        <Link to ="/404">
                            <button className = "btnCarousel leftBtnCarousel">View More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className = "imgBg d-block w-100" 
                         src={Img2}
                         alt=""/>
                    <Carousel.Caption>
                    <h3 className = "titleCarousel middleCarousel">
                            {' '}
                            Control and manage any device with cloud solutions
                        </h3>
                        <p className = "subTitleCarousel middleCarousel">Improve business performance and the user experience with the right mix of IoT
						    technology and processes
                        </p>
                        <Link to ="/404">
                            <button className = "btnCarousel middleBtnCarousel">View More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className = "imgBg d-block w-100" src={Img3} alt=""/>
                    <Carousel.Caption>
                        <h3 className = "titleCarousel rightCarousel">
                            {' '}
                            Control and manage any device with cloud solutions
                        </h3>
                        <p className = "subTitleCarousel rightCarousel">Improve business performance and the user experience with the right mix of IoT
						    technology and processes
                        </p>
                        <Link to ="/404">
                            <button className = "btnCarousel rightBtnCarousel">View More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className = "imgBg d-block w-100" src={Img1} alt=""/>
                    <Carousel.Caption>
                        <h3 className = "titleCarousel leftCarousel">
                            {' '}
                            Control and manage any device with cloud solutions
                        </h3>
                        <p className = "subTitleCarousel leftCarousel">Improve business performance and the user experience with the right mix of IoT
						    technology and processes
                        </p>
                        <Link to ="/404">
                            <button className = "btnCarousel leftBtnCarousel">View More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className = "imgBg d-block w-100" src={Img2} alt=""/>
                    <Carousel.Caption>
                    <h3 className = "titleCarousel middleTitleCarousel">
                            {' '}
                            Control and manage any device with cloud solutions
                        </h3>
                        <p className = "subTitleCarousel middleCarousel">Improve business performance and the user experience with the right mix of IoT
						    technology and processes
                        </p>
                        <Link to ="/404">
                            <button className = "btnCarousel middleBtnCarousel">View More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        

        </Col>

        <Col className="secondCol">
            <Card>
                <Card.Img variant="top" src={salesImage} className = "imgSales"/>
                <Card.Body>
                    <Card.Title>
                        <span className = "titleSales">Follow us on Facebook</span>
                    </Card.Title>
                    <Card.Text>
                        <span className = "subTitleSales">
                            Sed ut perspiciatis unde omnis iste natus erroe sit
                        </span>
                    </Card.Text>
                    <form>
                        <button className = "btnSales" formAction = "https://www.facebook.com/">
                        <FontAwesomeIcon icon={[ 'fab','facebook-f' ]} className = "styleFb" />
                        FOLLOW
                        </button>
                    </form>
                </Card.Body>
            </Card>

        </Col>
        
        </Row>
        </Container>
        </div>
    )

};
export default Slider;
