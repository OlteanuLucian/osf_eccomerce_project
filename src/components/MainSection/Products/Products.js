import React, {Component} from 'react';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Products.css';
import { Link } from 'react-router-dom';
import Slider from '../../../../node_modules/react-slick';
import Card1 from '../../Img/Main/Products/card1.webp';
import Card2 from '../../Img/Main/Products/card2.webp';
import Card3 from '../../Img/Main/Products/card3.webp';
import Card4 from '../../Img/Main/Products/card4.webp';
import Card5 from '../../Img/Main/Products/card5.webp';
import Card6 from '../../Img/Main/Products/card6.webp';
import Card7 from '../../Img/Main/Products/card7.webp';
import Button from '../../../../node_modules/react-bootstrap/Button';
import Plus from '../../Img/Plus.webp';
import Heart from '../../Img/Heart.webp';


const photos = [
    {
        name: "Photo1",
        img: Card1,
        title: "Kristina Dam Oak Table With White Marble Top",
        currency: "$",
        price: " 799.55"
    },
    {
        name: "Photo2",
        img: Card2,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        price: " 659.55"
    },
    {
        name: "Photo3",
        img: Card3,
        title: "Activate Facial Mask and Charcoal Soap",
        currency: "$",
        price: " 129.55"
    },
    {
        name: "Photo4",
        img: Card4,
        title: "Cocktail Table Walnut | YES",
        currency: "$",
        price: " 299.99"
    },
    {
        name: "Photo5",
        img: Card5,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        price: " 7659.55"
    },
    {
        name: "Photo6",
        img: Card6,
        title: "TORY DESK CALENDAR",
        currency: "$",
        price: " 410.99"
    },
    {
        name: "Photo7",
        img: Card7,
        title: "CH445 Wing Chair SUITE NY",
        currency: "$",
        price: " 330.55"
    },
]

class Products extends Component {
    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    operation() {
        this.setState({
            show:true
        })
    }

    render(){
        const settings = {
            dots: true,
            fade:true,
            fadeSpeed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            arrows: false,
            slidesScroll: 1,
            focusOnSelect: true,
            className : "slides"
        }

        return (
            <div className="products">
                <div className="title">
                    <h4 className="lineProducts">
                        <span className="popularItems">
                            Popular Items 
                        </span>
                    </h4>
                </div>
                <div className="card">
                    <Slider {...settings}>
                        {photos.map((photo) => {
                            return(
                                <div className="cardCard">
                                    <div className="cardImage">
                                        <div className="overlayCardImage">
                                            <img className="imgProducts" src={photo.img} alt=""/>       
                                        </div>
                                    </div>
                                    <div className="imagePlusHeart">
                                        <Link to='/ShoppingCart'><img className="plusImage" src={Plus} alt="Plus"></img></Link>
                                        <Link to='/ProductDetailedPage'><img className="heartImage" src={Heart} alt="Heart"></img></Link>
                                    </div>
                                    <div className="cardTitle">
                                        <h3 className="photoTitle">{photo.title}</h3>
                                    </div>
                                    <div className="cardButton">
                                        <Button className="buttonCurrency" variant="light" onClick={() => this.operation()}>{photo.currency + photo.price}</Button>
                                        { 
                                            this.state.show?
                                                <div className="hideCardButton">
                                                    <Link to='/ProductDetailedPage'><button className="hideButtonCurrency" onClick={() => this.operation()}>{photo.currency + photo.price}</button></Link>
                                                    <Link to='/ShoppingCart'><button className="hideButtonBuyNow">BUY NOW</button></Link>
                                                </div>
                                            :null
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                
            </div>    
        );


    }
}

export default Products;