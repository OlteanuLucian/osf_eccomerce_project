import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../Img/logo.webp';
import arrow from '../Img//Desktop/downarrow.webp';
import Search from '../Img/search.png';
import ProfileUser from '../Img/profileUser.png'; 
import Heart from '../Img/Heart.png';
import BagForShopping from '../Img/BagForShopping.png';
import DropdownImg from '../Img/dropdown-img.webp';

import './NavbarMenuDesktop.css';

import Login from '../LoginForm/LoginForm.js';

function NavbarMenuDesktop() {

    const [buttonLogin, setButtonLogin] = useState(false);
    const [show, setShow]=useState(false)

    return (
        <div className="navigationContainer">
            <div className="navbarMenuDesktopContainer">
                <Link to="/Home">
                    <button className="imageLogoText">
                        <img className="logoImage" src={logo} alt="" />
                        <div className="logoTextContainer">
                            <p className="logoText">OSF</p>
                            <span className="logoSpanText">Academy</span>
                        </div>
                    </button>
                </Link>

                <div className="navbarMenuButtons">
                    <button className="servicesButton" onClick={() => setShow(!show)} >SERVICES <img className="downArrow" src={arrow} alt="" /></button>
                    <button className="companyButton">COMPANY <img className="downArrow" src={arrow} alt="" /></button>
                    <button className="libraryButton">LIBRARY <img className="downArrow" src={arrow} alt="" /></button>
                    <button className="contactUsButton">CONTACT US <img className="downArrow" src={arrow} alt="" /></button>
                </div>

                <div className="navbarMenuDisabledButtons">
                    <button className="languageButton">EN<img className="downArrow" src={arrow} alt="" /></button>
                    <button className="currencyButton">$US<img className="downArrow" src={arrow} alt="" /></button>
                </div>

                <div className="navbarMenuSocialIconsButton">
                    <div className="buttonNavbarContainer">
                        <button className="button-navBarDesktop1">0</button>
                        <button className="button-navBarDesktop1">0</button>
                    </div>

                    <img  className="iconNavBarDesktop" src={Search} alt="Search" />
                    <button className="buttonUser" onClick={() => setButtonLogin(true)}>
                        <img  className="iconNavBarDesktop" src={ProfileUser} alt="ProfileUser" />
                    </button>
                    <Login trigger={buttonLogin} setTrigger={setButtonLogin}></Login>
                    
                    <Link to="/ProductDetailed"><img  className="iconNavBarDesktop" src={Heart} alt="Heart" /></Link>
                    <Link to="/ShoppingCart"><img  className="iconNavBarDesktop" src={BagForShopping} alt="BagForShopping" /></Link>
                </div>
            </div>
            
            {
                show?
            
                    <div className="toggleNavbarMenuDesktop">
                        <div className="productCategoriesDesktop">PRODUCT CATEGORIES</div>
                        
                        <div className="empty1"></div>
                        <div className="empty2"></div>
                        <div className="salesDesktop">SALES</div>
                        <div className="dropdownImageDesktop">
                            <div className="imgDropDownContainer" >
                                <img className="imgDropDownDesktop" 
                                src={DropdownImg} fluid sticky = "none" alt="girl at shopping" />
                            </div>
                        </div>

                        <div className="detailsCategoryDesktop">
                            <Link to="/404"><button className="detailsButtonDesktop">Accessories</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Alcohol</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Art</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Books</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Drink</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Electronics</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Flower & Plants</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Food</button></Link>
                        </div>
                        <div className="detailsCategoryDesktop1">
                            <Link to="/404"><button className="detailsButtonDesktop">Gadgets</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Garden</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Grocery</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Home</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Jewelry</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Kids & Baby</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Men's Fashion</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Mobile</button></Link>
                        </div>
                        <div className="detailsCategoryDesktop2">
                            <Link to="/404"><button className="detailsButtonDesktop">Motorcycles</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Movies</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Music</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Office</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Pets</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Romantic</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Sport</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Toys</button></Link>
                        </div>
                        <div className="detailsCategoryDesktop3">
                            <Link to="/404"><button className="detailsButtonDesktop">Accessories</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Alcohol</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Art</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Books</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Drink</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Electronics</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Flower & Plants</button></Link>
                            <Link to="/404"><button className="detailsButtonDesktop">Food</button></Link>
                        </div>
                    </div>
                :null
            }
        </div>
    )
}
export default NavbarMenuDesktop;
