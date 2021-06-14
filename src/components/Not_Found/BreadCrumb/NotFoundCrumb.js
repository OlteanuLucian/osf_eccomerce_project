import React from 'react';
import {Link} from 'react-router-dom';

import './NotFoundCrumb.css';

function NotFoundCrumb() {
    return (
        <div className="clpBread">
            <Link to="/Home"><span className="homeCrumb">Home</span></Link>
            <p>/</p>
            <Link to="/CategoryLanding">404</Link>
        </div>
    );
  }

export default NotFoundCrumb;
