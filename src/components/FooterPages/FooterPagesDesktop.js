import React from 'react';
import { Link } from 'react-router-dom';

import './FooterPagesDesktop.css';

import Facebook from '../Img/Socialicons/facebookIco.png';
import Google from '../Img/Socialicons/googleIco.png';
import Twitter from '../Img/Socialicons/twitterIco.png';
import Pinterest from '../Img/Socialicons/pinterestIco.png';
import HourGlass from '../Img/hourglass.png';

function FooterPagesDesktop() {
    return(
        <div className="footerDetailsDesktop"> 
            <div className="copyRight">
                <p className="text">&copy;Copyright2019.<br />All rights reserved.</p>
            </div>
            <div className="detailsContact">
            <p className="textDetailsB">CONTACT</p>
            <p className="textDetailsA">Headquarters:</p>
            <p className="textDetailsA">5600, Blvd. des Galeries, Bur 530</p>
            <p className="textDetailsA">Quebec,Quebec G2K 2H6</p><br />
            <p className="textDetailsA">contact@osf-global.com</p><br />
                <p className="textDetailsA">+1 (888) 548-4344</p>
            </div>
            <div className="Categories">
                <p className="textDetailsB">CATEGORIES</p>
            </div>
            <div className="detailsCategories">
                <Link to="/404"><p className="textDetailsD">Alcohol</p></Link>
                <Link to="/404"><p className="textDetailsD">Art</p></Link>
                <Link to="/404"><p className="textDetailsD">Books</p></Link>
                <Link to="/404"><p className="textDetailsD">Drink</p></Link>
                <Link to="/404"><p className="textDetailsD">Electronics</p></Link>
            </div>
            <div className="detailsCategoriesSecond">
                <Link to="/404"><p className="textDetailsD">Home</p></Link>
                <Link to="/404"><p className="textDetailsD">Jewelry</p></Link>
                <Link to="/404"><p className="textDetailsD">Kids & Baby</p></Link>
                <Link to="/404"><p className="textDetailsD">Men's Fashion</p></Link>
                <Link to="/404"><p className="textDetailsD">Mobile</p></Link>
                <Link to="/404"><p className="textDetailsD">Motorcycles</p></Link>
                <Link to="/404"><p className="textDetailsD">Movies</p></Link>
                <Link to="/404"><p className="textDetailsD">Music</p></Link>
            </div>
            <div className="detailsCategoriesThird">
                <Link to="/404"><p className="textDetailsD">Sport</p></Link>
                <Link to="/404"><p className="textDetailsD">Toys</p></Link>
                <Link to="/404"><p className="textDetailsD">Travel</p></Link>
                <Link to="/404"><p className="textDetailsD">Women's Fashion</p></Link>
            </div>
            <div className="About">
                <p className="textDetailsB">ABOUT</p>
            </div>
            <div className="detailsCategoriesAbout">
                <Link to="/404"><p className="textDetailsD">About us</p></Link>
                <Link to="/404"><p className="textDetailsD">Delivery</p></Link>
                <Link to="/404"><p className="textDetailsD">Testimonials</p></Link>
                <Link to="/404"><p className="textDetailsD">Contact</p></Link>
            </div>
            <div className="socialIcons">
                <Link to={{ pathname: "https://facebook.com" }} target="_blank"><img className="facebook" src={Facebook} alt="Facebook" /></Link>
                <Link to={{ pathname: "https://www.google.com" }} target="_blank"><img className="google dist" src={Google} alt="Google" /></Link>
                <Link to={{ pathname: "https://twitter.com" }} target="_blank"><img className="twitter dist" src={Twitter} alt="Twitter" /></Link>
                <Link to={{ pathname: "https://www.pinterest.com" }} target="_blank"><img className="pinterest dist" src={Pinterest} alt="Pinterest" /></Link>
            </div>
            <div className="hourGlassContainer">
                <Link to="/Release"><img className="hourGlass" src={HourGlass} alt="HourGlass" /></Link>
            </div>
        </div>
    );
}

export default FooterPagesDesktop;

