import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Card1 from '../../Img/Main/FeaturedProducts/prod1.png';
import Card2 from '../../Img/Main/FeaturedProducts/prod2.png';
import Card3 from '../../Img/Main/FeaturedProducts/prod3.png';
import Card4 from '../../Img/Main/FeaturedProducts/prod4.png';
import Icon from "../../Img/Main/FeaturedProducts/icon.png"

import backward from '../../Img/Desktop/arrow-left.webp';
import forward from '../../Img/Desktop/arrow-right.webp';
import "./FeaturedProducts.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Container from "react-bootstrap/Container";






class FeaturedProducts extends Component {
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
                id: 'photo1',
                name: 'Photo 1',
                imgImp: Card1,
                title: 'Kristina Dam Oak Table With White Marble',
                text: 'Awesome'
            },
            {
                id: 'photo2',
                name: 'Photo 2',
                imgImp: Card2,
                title: 'Kristina Dam Oak Table With White Marble',
                text: 'Awesome'
            },
            {
                id: 'photo3',
                name: 'Photo 3',
                imgImp: Card3,
                title: 'Hezy Theme',
                text: 'Marketing'
            },
            {
                id: 'photo4',
                name: 'Photo 4',
                imgImp: Card4,
                title: 'Kristina Dam Oak Table With White Marble',
                text: 'Marketing'
            },
            {
                id: 'photo5',
                name: 'Photo 5',
                imgImp: Card1,
                title: 'Kristina Dam Oak Table With White Marble',
                text: 'Marketing'
            }
        ] 
        return (
            <div className = "productsFP">
                <Row className = "featuredProductsContainer">
                    <Row className = "firstRowFP">
                        <Col>
                            <h1 className="titleFP">Featured Products</h1>
                            <p className="detailsFP">Unde omnis iste natus error sit voluptatem</p>

                            <div className="border">
                                <img src = {Icon} alt=""/>
                            </div>
                            
                                <img onClick={this.previous} src ={backward} className = "prev" alt=""/>
                                
                                <img onClick={this.next} src ={forward} className = "next" alt=""/>
                            
                        </Col>
                    </Row>


                    <Row className = "secondRowFP">
                        <Col className = "colFP">
                            <Slider ref = {(c) => (this.slider = c)} {...settings} slickPrev={null}>
                                {cards.map(({imgImp, title, text}) => (
                                    <div className = "cardWrapper">
                                        <Card className = "cardGlobalFP">
                                            <Link to ="/ProductDetailedPage">
                                                
                                                <Card.Img className = "cardImgFP" variant="top" src={imgImp}/>

                                                <Card.Body className = "cardHeightFP">
                                                        <Card.Title className = "cardMainTextFP"> 
                                                            {title}
                                                        </Card.Title>
                                                        <Card.Text className = "cardSubTextFP">
                                                            {text}
                                                        </Card.Text>
                                                </Card.Body>
                                           </Link>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                    
                </Row>
            </div>
        );
    }
}

export default FeaturedProducts;
