import React, {useEffect} from "react";
import "../App.css";

import NavbarMenuResponsive from "../components/NavbarMenuResponsive/NavbarMenuResponsive";
import ClpBreadCrumb from "../components/CategoryLandingPageResponsive/BreadCrumb/ClpBreadCrumb.js";
import ClpServices from "../components/CategoryLandingPageResponsive/Title/ClpServices.js";
import Filter from "../components/CategoryLandingPageResponsive/Filter/Filter.js";
import Cards from "../components/CategoryLandingPageResponsive/Cards/Cards.js";
import FooterPages from "../components/FooterPages/FooterPages.js";
import Footer from "../components/Footer/Footer.js";
import NavbarMenuDesktop from "../components/NavbarMenuDesktop/NavbarMenuDesktop.js";
import CardsDesktopLanding from "../components/CategoryLandingPageResponsive/CardsDesktop/CardsDesktopLanding.js";
import FeaturedProducts from "../components/MainSection/FeaturedProducts/FeaturedProducts.js";
import FooterPagesDesktop from "../components/FooterPages/FooterPagesDesktop.js";

function CategoryLandingPage() {
    return (
      <div className="categoryLandingPage">
        <div className="entirePageMobile">
          <div className="navigationMenu">
              <NavbarMenuResponsive />
          </div>
          <div className="mainPage">
              <ClpBreadCrumb />
              <ClpServices />
              <Filter />
              <Cards />
              <FooterPages />
              <Footer /> 
          </div>
        </div>
        <div className="entirePageDesktop">
          <div className="firstRow">
            <NavbarMenuDesktop />
          </div>
          <div className="secondRow">
            <ClpBreadCrumb />
            <ClpServices />
            <Filter />
          </div>
          <div className="thirdRow">
            <CardsDesktopLanding />
          </div>
          <div className="theFifthRow">
            <FeaturedProducts /> 
          </div>
          <div className="theSeventhRow">
            <FooterPagesDesktop />
          </div>
        </div> 
      </div>
    );
  }
  
  export default CategoryLandingPage;
  