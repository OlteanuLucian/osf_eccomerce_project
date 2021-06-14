import React from 'react';
import { Navbar, Image} from 'react-bootstrap';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Img/search.png';
import ProfileUser from '../Img/profileUser.png'; 
import Heart from '../Img/Heart.png';
import BagForShopping from '../Img/BagForShopping.png';
import '../NavbarMenuResponsive/NavbarMenuResponsive.css';
import './Footer.css';
import Login from '../LoginForm/LoginForm.js';

function Footer() {
    const [buttonLogin, setButtonLogin] = useState(false);
    return(
        <Navbar expand="lg" id="navBarBottom">
            <div className="flex1">
                <div className="numberFooter">
                    <h1>0</h1>
                </div>

                <div className="numberFooter">
                    <h1>0</h1>
                </div>
                 
            </div>   

            <Image  className="imgFooter" src={Search} />
            
            <button className="buttonUser" onClick={() => setButtonLogin(true)}><Image  className="imgFooter" src={ProfileUser} /></button>
            
            <Login trigger={buttonLogin} setTrigger={setButtonLogin}></Login>
            
            <Image  className="imgFooter" src={Heart} />
            
            <Link to="/ShoppingCart"><Image  className="imgFooter" src={BagForShopping} /></Link>
        </Navbar>
    );
}

export default Footer;