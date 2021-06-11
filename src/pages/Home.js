import React from 'react';


import NavbarMenuResponsive from "../components/NavbarMenuResponsive/NavbarMenuResponsive.js";
import NavbarMenuDesktop from "../components/NavbarMenuDesktop/NavbarMenuDesktop.js";
import Banner from '../components/MainSection/Banner/Banner.js';
import Services from '../components/MainSection/Services/Services.js';

import './Home.css';


function Home (){

  return (
    <div>
     
     <div className="entirePageMobile">
       
        <div className="navigationMenu">
          <NavbarMenuResponsive />
        </div>

        <div className="mainPage">
          <div className="firstRow">
            {/* <Slider /> */}
          </div>
          {/* <Products /> */}
          <Banner /> 
          {/* <Services />
          <Pagesfooter /> */}
        </div>
        
        {/* <div className="footerPageMobile">
          <Footer /> 
        </div> */}

      </div>

      <div className="entirePageDesktop">

        {/* <Cookies trigger={buttonCookies} setTrigger={setButtonCookies}></Cookies>
        <Cookies trigger={timedCookies} setTrigger={setTimedCookies}></Cookies> */}
        
        <div className="firstRow">
          <NavbarMenuDesktop />
        </div>
        
        <div className="secondRow">
          {/* <Slider />
          <Sales /> */}
        </div>
     
        <div className="thirdRow">
          {/* <TitleCards />
          <Cards /> */}
        </div> 
        
        <div className="fourthRow">
          <Banner /> 
        </div>
        
        <div className="fifthRow">
          {/* <FeaturedProducts />  */}
        </div>
        
        <div className="sixthRow">
          <Services /> 
        </div>
        
        <div className="seventhRow">
          {/* <PagesFooterDesktop /> */}
          
        </div>
      
      </div>





    </div>
  );
};


export default Home;
