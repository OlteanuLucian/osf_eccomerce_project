import React from 'react';
import './Services.css';

import ImgPack from '../../Img/Main/Services/imgpack.webp';
import ImgClip from '../../Img/Main/Services/imgclip.webp';
import ImgRecycle from '../../Img/Main/Services/imgrecycle.webp';

function Services() {
    return (
        <div className="mainServices">
            <div className="deliveryPackages">
                <img src={ImgPack} alt="" />
            </div>
            <div className="focus">
                <div className="title right">FOCUS</div>
                <div className="text right">Our unwavering focus on superior service delivery and building next generation competencies</div>
            </div>
            <div className="method">
                <div className="title left">METHOD</div>
                <div className="text left">A standardized methodology designed to deliver measurable business results and predictable costs</div>
            </div>
            <div className="recycle">
                <img src={ImgRecycle} alt="" />
            </div>
            <div className="clipboard">
                <img src={ImgClip} alt="" />
            </div>
            <div className="knowledge">
                <div className="title right">KNOWLEDGE</div>
                <div className="text right text-bottom"> A highly skilled, proactive workforce that reliably improves each client's ROI while mitigating their business risk</div>
            </div>
        </div>
    );
  }

export default Services;
