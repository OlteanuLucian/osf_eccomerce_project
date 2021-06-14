import React from 'react';

import NavbarMenuResponsive from '../components/NavbarMenuResponsive/NavbarMenuResponsive.js';

import NavbarMenuDesktop from '../components/NavbarMenuDesktop/NavbarMenuDesktop.js';

import Footer from '../components/Footer/Footer.js';

import FooterPages from '../components/FooterPages/FooterPages.js';

import FooterPagesDesktop from '../components/FooterPages/FooterPagesDesktop.js';

import NotFoundCrumb from '../components/Not_Found/BreadCrumb/NotFoundCrumb.js' 

import NotFoundTitle from '../components/Not_Found/Title/NotFoundTitle.js';

import NotFoundBody from "../components/Not_Found/Body/NotFoundBody.js";

import './NotFound.css';

function NotFoundPage() {
  return (
    <div>
      <div className="entirePageMobileNFP">
        <div className="navigationMenu">
            <NavbarMenuResponsive />
        </div>

        <div className="mainPage">
            <NotFoundCrumb />
            <NotFoundTitle />
            <NotFoundBody />
            <FooterPages />
            <Footer /> 
        </div> 
      </div>

      <div className="entirePageDesktopNFP">
        
        <div className="firstRow">
            <NavbarMenuDesktop />
        </div>
        
        <div className="secondRow">
            <NotFoundCrumb />
        </div>
        
        <div className="thirdRow">
            <NotFoundTitle />
        </div>
        
        <div className="theFifthRow">
            <NotFoundBody />
        </div>

        <div className="theSeventhRow">
          <FooterPagesDesktop />
        </div>
      </div> 
    </div>
  );
}

export default NotFoundPage;