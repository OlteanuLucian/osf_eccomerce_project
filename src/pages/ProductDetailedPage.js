import React from 'react'

import NavbarMenuResponsive from "../components/NavbarMenuResponsive/NavbarMenuResponsive.js";
import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';

import Cards from '../components/CategoryLandingPageResponsive/Cards/Cards.js';
import TitlePDP from "../components/ProductDetailsSection/TitlePDP/TitlePDP.js"
import Item from "../components/ProductDetailsSection/Items/Item.js"
import Popular from "../components/ProductDetailsSection/PopularItems/Popular.js"
import Description from "../components/ProductDetailsSection/Items/Description.js"
import Services from "../components/MainSection/Services/Services.js"

import Footer from "../components/Footer/Footer.js";
import FooterPages from "../components/FooterPages/FooterPages.js";
import FooterPagesDesktop from '../components/FooterPages/FooterPagesDesktop.js';




function ProductDetailedPage () {
    return (
        <div className = "productDetailedPage">
            <div className = "entirePageMobilePDP">
                <div className = "navigationMenuPDP">
                    {/* <NavbarMenuResponsive/> */}
                </div>
                <div className = "mainPagePDP">
                    {/* <TitlePDP/>
                    <Item/>
                    <Popular/> */}
                    {/* <Services/> */}
                    {/* <FooterPages/>
                    <Footer/> */}
                </div>
            </div>

            <div className = "entirePageDesktopPDP">
                <div className = "theFirstRowPDP">
                    <NavbarMenuDesktop/>
                </div>
                <div className = "theSecondRowPDP">
                    <TitlePDP/>
                    <Item/>
                </div>
                <div className = "theThirdRowPDP">
                    <Description/>
                </div>
                
                <div className = "theFifthRowPDP">
                    <Cards/>
                </div>
                <div className = "theSixthRowPDP">
                    <Services/>
                </div>
                <div className = "theSeventhRowPDP">
                    <FooterPagesDesktop/>
                </div>
            </div>            
        </div>
    )
}

export default ProductDetailedPage;
