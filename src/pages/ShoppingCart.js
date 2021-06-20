import React from 'react';
import NavbarMenuResponsive from '../components/NavbarMenuResponsive/NavbarMenuResponsive';
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop';

import Footer from '../components/Footer/Footer';
import FooterPages from '../components/FooterPages/FooterPages';
import FooterPagesDesktop from '../components/FooterPages/FooterPagesDesktop';

import Services from '../components/MainSection/Services/Services';

import TitleCart from '../components/ShoppingCart/TitleCart/TitleCart';
import BodyCart from '../components/ShoppingCart/BodyCart/BodyCart';

import './ShoppingCart.css';





function ShoppingCart(){
    return (
        <div>
            
            {/* small devices */}
            <div className = "entirePageMobile">
                <div className = "navigationMenu">
                    <NavbarMenuResponsive />
                </div>

                <div className = "mainPage">
                    <TitleCart/>
                    <BodyCart/>
                    <Services/>
                    <FooterPages/>
                    <Footer/>
                </div>
            </div>

            {/* desktop */}
            <div className = "entirePageDesktop">
            <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
          <TitleCart />
        </div>
        <div className="thirdRow">
          <BodyCart />
        </div>
        <div className="theSeventhRow">
          <FooterPagesDesktop />
        </div>
            </div>
        </div>
    )
}

export default ShoppingCart;

