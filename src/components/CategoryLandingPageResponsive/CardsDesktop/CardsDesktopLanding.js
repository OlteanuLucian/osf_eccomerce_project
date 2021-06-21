import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Card1 from '../../Img/PopularItems/item01.png';
import Card2 from '../../Img/PopularItems/item02.png';
import Card3 from '../../Img/PopularItems/item03.png';
import Card4 from '../../Img/PopularItems/item04.png';
import Card5 from '../../Img/PopularItems/item05.png';
import Card6 from '../../Img/PopularItems/item06.png';
import Card7 from '../../Img/PopularItems/item07.png';
import Card14 from '../../Img/PopularItems/item14.png';
import Card15 from '../../Img/PopularItems/item15.png';

import Plus from '../../Img/Plus.webp';
import Heart from '../../Img/Heart.webp';

import './CardsDesktopLanding.css';

const photos = [
    {
        id: 'photo1',
        name: 'Photo 1',
        img: Card1,
        title: "Kristina Dam Oak Table With White Marble Top",
        currency: "$",
        cost: " 799.55",
    },
    {
        id: 'photo2',
        name: 'Photo 2',
        img: Card2,
        title: "EAMES X Cast + Crew - Custom Powder Coated",
        currency: "$",
        cost: " 799.55",
    },
    {
        id: 'photo3',
        name: 'Photo 3',
        img: Card3,
        title: "Activate Facial Mask and Charcoal Soap",
        currency: "$",
        cost: " 129.55",
    },
    {
        id: 'photo4',
        name: 'Photo 4',
        img: Card4,
        title: "Vitra Cork Stool B, Cork - Design Within Reach",
        currency: "$",
        cost: " 299.99",
    },
    {
        id: 'photo5',
        name: 'Photo 5',
        img: Card5,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55",
    },
    {
        id: 'photo6',
        name: 'Photo 6',
        img: Card6,
        title: "TORY DESK CALENDAR",
        currency: "$",
        cost: " 410.99",
    },
    {
        id: 'photo7',
        name: 'Photo 7',
        img: Card7,
        title: "CH445 Wing Chair on SUITE NY",
        currency: "$",
        cost: " 330.55",
    },
    {
        id: 'photo8',
        name: 'Photo 8',
        img: Card7,
        title: "CH445 Wing Chair on SUITE NY",
        currency: "$",
        cost: " 330.55",
    },    
    {
        id: 'photo9',
        name: 'Photo 9',
        img: Card7,
        title: "Kristina Dam Oak Table With White Marble Top",
        currency: "$",
        cost: " 2195.00",
    },
    {
        id: 'photo10',
        name: 'Photo 10',
        img: Card7,
        title: "MONOQI | Ø55 Crosit Table - Wht/Grn",
        currency: "$",
        cost: " 299.99",
    },
    {
        id: 'photo11',
        name: 'Photo 11',
        img: Card5,
        title: "Vitra Cork Stool B, Cork - Design Within Reach",
        currency: "$",
        cost: " 870.95",
    },
    {
        id: 'photo12',
        name: 'Photo 12',
        img: Card7,
        title: "Activate Facial Mask and Charcoal Soap",
        currency: "$",
        cost: " 129.55",
    },
    {
        id: 'photo13',
        name: 'Photo 13',
        img: Card7,
        title: "Hay - About A Lounge Chair AAL 93",
        currency: "$",
        cost: " 659.55",
    },
    {
        id: 'photo14',
        name: 'Photo 14',
        img: Card14,
        title: "TORY DESK CALENDAR",
        currency: "$",
        cost: " 410.99",
    },
    {
        id: 'photo15',
        name: 'Photo 15',
        img: Card15,
        title: "EAMES X Cast + Crew - Custom Powder Coated",
        currency: "$",
        cost: " 330.55",
    },
    {
        id: 'photo16',
        name: 'Photo 16',
        img: Card7,
        title: "CH445 Wing Chair on SUITE NY",
        currency: "$",
        cost: " 330.55",
    }
]
export class Cards extends Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    operation(id){
        this.setState({
            show:true,
            id:id
            
        })
    }
    render() {
        return (
            <div className="container">
                <div className="titleab">
                    <p className = "results">
                        <span className = "resultsNum">12,931</span> results in apparel
                    </p>
                </div>
                {photos.map((photo) => {
                    return(
                        <div className="card-container">
                            <div className="img-container">
                                <div className="overlayCardImage">
                                    <img className="imgContainerCards" src={photo.img} alt=""/>
                                    <div className="imagePlusHeart">
                                        <Link to='/ShoppingCart'><img className="plusImage" src={Plus} alt="Plus"></img></Link>
                                        <Link to='/ProductDetailedPage'><img className="heartImage" src={Heart} alt="Heart"></img></Link>
                                    </div>
                                </div>
                            </div>                       

                            <div className="card-content">
                                <div className="card-body">
                                    <h3 className="photoTitleH">{photo.title}</h3>
                                    <p className = "photoCost">{photo.currency  + photo.cost}</p>
                                </div>
                            </div> 
                        </div> 
                    )
                })}
                <div className="loadMorea">
                    <button className="loadMoreButtonCardsa">
                        LOAD MORE
                    </button>
                </div>
            </div>
        )
    }
}

export default Cards
