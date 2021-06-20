import React, { Component } from 'react';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Popular.css';
import Slider from '../../../../node_modules/react-slick';
import Card1 from '../../Img/Main/Products/card1.webp';
import Card2 from '../../Img/Main/Products/card2.webp';
import Card3 from '../../Img/Main/Products/card3.webp';
import Card4 from '../../Img/Main/Products/card4.webp';
import Card5 from '../../Img/Main/Products/card5.webp';
import Card6 from '../../Img/Main/Products/card6.webp';
import Card7 from '../../Img/Main/Products/card7.webp';
import Button from '../../../../node_modules/react-bootstrap/Button';

const products = [
    {
        name: 'Photo 1',
        img: Card1,
        title: "Kristina Dam Oak Table With White Marble Top",
        currency: "$",
        cost: " 799.55"
    },
    {
        name: 'Photo 2',
        img: Card2,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55"
    },
    {
        name: 'Photo 3',
        img: Card3,
        title: "Activate Facial Mask and Charcoal Soap",
        currency: "$",
        cost: " 129.55"
    },
    {
        name: 'Photo 4',
        img: Card4,
        title: "Cocktail Table Walnut | YES",
        currency: "$",
        cost: " 299.99"
    },
    {
        name: 'Photo 5',
        img: Card5,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55"
    },
    {
        name: 'Photo 6',
        img: Card6,
        title: "TORY DESK CALENDAR",
        currency: "$",
        cost: " 410.99"
    },
    {
        name: 'Photo 7',
        img: Card7,
        title: "CH445 Wing Chair on SUITE NY",
        currency: "$",
        cost: " 330.55"
    }
]

class Popular extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            fadeSpeed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            focusOnSelect: true,
            className: "slidesP"
        }

        return (
            <div className="productsP">
                <div className="titleP">
                    <h4 className="lineProductsP">
                        <span className="popularItemsP">
                            Popular Items
                        </span>
                    </h4>
                </div>
                <div className="cardP">

                    <Slider {...settings}>
                        {products.map((product) => {
                            return (
                                <div className="cardCardP">
                                    <div className="cardImageP">
                                        <img className="imgProductsP" src={product.img} alt="" />
                                    </div>
                                    <div className="cardTitleP">
                                        <h3 className="photoTitleP">{product.title}</h3>
                                    </div>
                                    <div className="cardButtonP">
                                        <Button className="buttonCurrencyP" variant="light">{product.currency + product.cost}</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="scrollDiv">
                    <button className="scrollToTop">SCROLL TO TOP</button>
                </div>
            </div>
        );
    }
}

export default Popular;
