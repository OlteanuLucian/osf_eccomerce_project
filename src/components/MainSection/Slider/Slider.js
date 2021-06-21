import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Slider.css';
import Img1 from '../../Img/Desktop/Slider/img1.png';
import Img2 from '../../Img/Desktop/Slider/img2.png';
import Img3 from '../../Img/Desktop/Slider/img3.png';

function Slider() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="firstDiv">
             
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100 imgBg" src={Img1} alt="1st slide" />
                    <Carousel.Caption className = "styleCaption">
                        <h4 className="title leftCarousel">Control and manage any device with cloud solutions</h4>
                        <p className="content leftCarousel">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        
                            <Link to='/CategoryLandingServices'>
                                <button className="viewMoreButton btnLeft">
                                    VIEW MORE
                                </button>
                            </Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 imgBg" src={Img2} alt="2nd slide" />
                    <Carousel.Caption className = "styleCaption">
                        <h4 className="title middleCarousel">Control and manage any device with cloud solutions</h4>
                        <p className="content middleCarousel">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        
                            <Link to='/CategoryLandingServices'><button className="viewMoreButton btnMiddle" href="#">VIEW MORE</button></Link>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 imgBg" src={Img3} alt="3rd slide" />
                    <Carousel.Caption className = "styleCaption">
                        <h4 className="title rightCarousel">Control and manage any device with cloud solutions</h4>
                        <p className="content rightCarousel">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        
                            <Link to='/CategoryLandingServices'><button className="viewMoreButton btnRight" href="#">VIEW MORE</button></Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 imgBg" src={Img1} alt="4th slide" />
                    <Carousel.Caption className = "styleCaption">
                        <h4 className="title leftCarousel">Control and manage any device with cloud solutions</h4>
                        <p className="content leftCarousel">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        
                            <Link to='/CategoryLandingServices'>
                                <button className="viewMoreButton btnLeft" href="#">VIEW MORE</button></Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 imgBg" src={Img2} alt="5th slide" />
                    <Carousel.Caption className = "styleCaption">
                        <h4 className="title MiddleCarousel">Control and manage any device with cloud solutions</h4>
                        <p className="content middleCarousel">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                       
                            <Link to='/CategoryLandingServices'><button className="viewMoreButton btnMiddle" href="#">VIEW MORE</button></Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
  }

export default Slider;
