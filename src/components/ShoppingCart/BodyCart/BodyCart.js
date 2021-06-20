import React from 'react'
import { useState } from "react";
import image from '../../Img/PdpImages/PG.10216885.JJ8UTXX.PZ.jpg';
import image2 from '../../Img/Shopping/x.webp';
import './BodyCart.css';

function BodyCart() {
    const [value, setValue] = useState(1);
    const onAdd = () => setValue(value + 1);
    const onSubtract = () => setValue(value - 1);
    const [value1, setValue1] = useState(1);
    const onAdd1 = () => setValue1(value1 + 1);
    const onSubtract1 = () => setValue1(value1 - 1);
    return (
        <div className="bodyPage">
            <div className="firstBody">
                <div className={value < 1 ? "detailsNone" : "details"}>
                    
                    <div className="titlep">Kristina Dam Oak Table With White Marble Top</div>
                    <div className="pricep">$2,195.00</div>
                    <div className="image">
                        <img className="productImage" src={image} alt="" />
                    </div>
                    <div className="increase">
                        <button className="minus" onClick={onSubtract}>-</button>
                        <button className="number">{value}</button>
                        <button className="plus" onClick={onAdd}>+</button>
                    </div>
                    <div className="lastDiva"> 
                            $2,195
                    </div>
                    <button className="deleteButton">
                            <img className="cancelImage" src={image2} alt=""/>
                    </button>
                </div>
                <br />
                <div className={value1 < 1 ? "detailsNone" : "details"}>
                    
                    <div className="titlep">Kristina Dam Oak Table With White Marble Top</div>
                    <div className="pricep">$2,195.00</div>
                    <div className="image">
                        <img className="productImage" src={image} alt="" />
                    </div>
                    <div className="increase">
                        <button className="minus" onClick={onSubtract1}>-</button>
                        <button className="number">{value1}</button>
                        <button className="plus" onClick={onAdd1}>+</button>
                    </div>
                    <div className="lastDiva"> 
                            $2,195
                    </div>
                    <button className="deleteButton">
                            <img className="cancelImage" src={image2} alt="" />
                    </button>
                </div>
                
            </div>
            <div className="secondBody">
                <div className="couponCode couponButtonGrid1">
                    <input className="couponButton" type="text" placeholder="Enter Coupon Code"></input>
                    <button className="applyButton">APPLY</button>
                </div>
                <div className="couponCode couponCodeMargin couponButtonGrid2">
                    <button className="applyButtona">UPDATE CART</button>
                    <button className="applyButtonab">PROCEED TO CHECKOUT</button>
                </div>
                <div className="couponCode couponCodeMargin couponButtonGrid3">
                    <span className="sampleText">CART SUBTOTAL</span>
                    <span className="sampleTextBold sampleTextBoldLeft">$3,489</span>
                </div>
                <div className="couponCode couponCodeMargin couponButtonGrid4">
                    <span className="sampleTextBold">SHIPPING<br />AND<br />HANDLING</span>
                    <ul>
                        <li>
                            <input type="radio" id="f-option" name="selector"></input>
                            <label className="sampleText" for="f-option">Flat Rate:<span className="sampleTextBold">$10.00</span></label>
                        </li>
                        <li>
                            <input type="radio" id="f-option1" name="selector" style={{border: "10px solid #EFE5CE"}}></input>
                            <label className="sampleText" for="f-option1">Free Shipping</label>
                        </li>
                        <li>
                            <input type="radio" id="f-option2" name="selector"></input>
                            <label className="sampleText" for="f-option2">International:<span className="sampleTextBold">$60.00</span></label>
                        </li>
                        <li>
                            <input type="radio" id="f-option3" name="selector"></input>
                            <label className="sampleText" for="f-option3">Local Delivery:<span className="sampleTextBold">$5.00</span></label>
                        </li>
                        <li>
                            <input type="radio" id="f-option4" name="selector"></input>
                            <label className="sampleText" for="f-option4">Local Pickup (Free)</label>
                        </li>
                    </ul>
                </div>
                <div className="couponCode couponCodeMargin couponButtonGrid5">
                    <span className="sampleTextBold">ORDER TOTAL:</span>
                    <span className="sampleTextBold sampleTextBoldSize">$3,489</span>
                </div>
            </div>
        </div>
    )
}

export default BodyCart
