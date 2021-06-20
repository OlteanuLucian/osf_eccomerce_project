import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import data from '../../Data/Data.js';

import Plus from '../../Img/Plus.webp';
import Heart from '../../Img/Heart.webp';
import Load from '../../Img/Desktop/Cards/load.webp';

import './Cards.css';

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
                {
                data.cardData.map((item, index) => {
                    return(
                        <div className="card-container">
                            <div className="img-container">
                                <div className="overlayCardImage">
                                    <img className="imgContainerCards" src={item.img} alt=""/>
                                    <div className="imagePlusHeart">
                                        <Link to='/ShoppingCart'><img className="plusImage" src={Plus} alt="Plus"></img></Link>
                                        <Link to='/ProductDetailedPage'><img className="heartImage" src={Heart} alt="Heart"></img></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <div className="card-body">
                                    <h3 className="photoTitleH">{item.title}</h3>
                                </div>
                            </div>
                            <div className="btn">
                                <button className="currencyCostBtn" key={item.id} onClick={() => this.operation(item.id)}>{item.currency + item.cost}</button>
                                { 
                                    this.state.show && this.state.id===item.id?
                                        <div className="hideCardButton">
                                            <Link to='/ProductDetailedPage'><button className="hideButtonCurrency" >{item.currency + item.cost}</button></Link>
                                            <Link to='/ShoppingCart'><button className="hideButtonBuyNow">BUY NOW</button></Link>
                                        </div>
                                        
                                     :null
                                }
                                
                            </div>   
                        </div> 
                    )
                })}
                <div className="loadMore">
                    <button className="loadMoreButtonCards" >
                        LOAD MORE
                        <img className="imageLoadMore" src={Load} alt="" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Cards

