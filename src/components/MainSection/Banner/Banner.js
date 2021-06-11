import React from 'react';

import './Banner.css';
import Banner1 from '../../Img/Main/Banner/img1.webp';
function Banner() {
    return (
        <div className="mainBanner">
            <img className="imgBannerMain" src={Banner1} alt="" />
            <div className="mainTitle">Banner OSF Theme</div>               
            <div className="mainText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</div>               
        </div>
    );
  }

export default Banner;