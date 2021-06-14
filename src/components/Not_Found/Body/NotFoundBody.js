import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundBody.css';

import Stop from '../../Img/NotFound/stop.webp';

function Body() {
    return (
        <div className="bodyContainer">
            <div className="stopImageContainer"> 
                <img className="stopImage" src={Stop} alt=""></img>
            </div>
            <div className="oops">
                <h1 className="oopsText">Oops!</h1>
            </div>
            <div className="details">
                <h4 className="sorry">Sorry, this page could not be found!</h4>
                <p className="sorryText">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                    ridiculus mus.<br /><br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <Link to="/Home"><button className="goBack">Go back to Homepage</button></Link>
                <h4 className="searchOurSite">Search our site</h4>


                
                
                <input className="search" type="text" placeholder="Search.." name="search"></input>
            
            
            </div>
        </div>
    );
  }

export default Body;

