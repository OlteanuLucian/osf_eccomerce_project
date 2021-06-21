import React from "react"; 
import {useState, useEffect} from 'react';


import NavbarMenuResponsive from "../components/NavbarMenuResponsive/NavbarMenuResponsive.js";
import NavbarMenuDesktop from "../components/NavbarMenuDesktop/NavbarMenuDesktop.js";
import Banner from '../components/MainSection/Banner/Banner.js';
import Services from '../components/MainSection/Services/Services.js';
import FooterPages from '../components/FooterPages/FooterPages.js';
import FooterPagesDesktop from '../components/FooterPages/FooterPagesDesktop.js';
import Footer from "../components/Footer/Footer.js";
import Cookies from '../components/Cookies/Cookies.js';
import Slider from "../components/MainSection/Slider/Slider.js";
import Sales from "../components/MainSection/Sales/Sales.js";
import Products from "../components/MainSection/Products/Products.js"
import FeaturedProducts from "../components/MainSection/FeaturedProducts/FeaturedProducts.js"
import './Home.css';
import TitlePDP from "../components/ProductDetailsSection/TitlePDP/TitlePDP.js";
import Item from "../components/ProductDetailsSection/Items/Item.js"
import TitleCards from "../components/CategoryLandingPageResponsive/Cards/TitleCards.js"
import Cards from "../components/CategoryLandingPageResponsive/Cards/Cards.js";
function Home (){

  // cookies 
  const [buttonCookies, setButtonCookies] = useState(false);
  const [timedCookies, setTimedCookies] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedCookies(true)
    }, 3000);
  },[]);


  return (
    <div>
     
     <div className="entirePageMobileHP">
       
       {/* cookies to be inserted */}
        <div className="navigationMenu">
          <NavbarMenuResponsive />
        </div>

        <div className="mainPage">
          <div className = "theFirstRow">
            <Slider/>
          </div>
          <Products/>
          <Banner />
          <Services />
          <FooterPages /> 
        </div>
        <div className="footerPageMobile">
          <Footer /> 
        </div>
      </div>

      <div className="entirePageDesktopHP">
        {/* cookies */}
        {/* <Cookies trigger={buttonCookies} setTrigger={setButtonCookies}></Cookies>
        <Cookies trigger={timedCookies} setTrigger={setTimedCookies}></Cookies>
         */}
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        <div className="secondRow">
          <Slider />
          <Sales />
        </div>
        <div className="thirdRow">
          <TitleCards />
          <Cards />
        </div>
        <div className="fourthRow">
          <Banner /> 
        </div>
        <div className="theFifthRow">
          <FeaturedProducts /> 
        </div>
        <div className="theSixthRow">
          <Services />
        </div>
        <div className="theSeventhRow">
          <FooterPagesDesktop />
        </div>
      
      </div>





    </div>
  );
};


export default Home;
