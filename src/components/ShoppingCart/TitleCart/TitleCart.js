import React from 'react'
import { Link } from 'react-router-dom';

import './TitleCart.css';

function TitleCart() {
    return (
        <div className="pdpBread">
            <div className="breadCrumbPdp">
                <Link to="/Home"><span className="homeCrumb">Home</span></Link>
                <p className="slasha">/</p>
                <Link to="/CategoryLanding">Shopping Cart</Link>
            </div>
            <div className="titlea">
                <h4 className="lineProductsa">
                    <span className="popularItemsa">
                        SHOPPING CART
                    </span>
                </h4>
            </div>
        </div>
    )
}

export default TitleCart
