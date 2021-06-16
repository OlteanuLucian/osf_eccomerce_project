import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Slider.css';
import Img1 from '../../Img/Desktop/Slider/img1.webp';
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
                    <img className="d-block w-100 firstImage" src={Img1} alt="Img1" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 firstImage" src={Img2} alt="Img2" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 firstImage" src={Img3} alt="Img3" />
                    <Carousel.Caption>
                        <h4 className="title">Control and manage any device with cloud solutions</h4>
                        <p className="content">Improve business performance and the user experience with the right mix of IoT technology and processes</p>
                        <div className="buttonView">
                            <Link to='/CategoryLanding'><button className="viewMoreButton" href="#">VIEW MORE</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }

export default Slider;
