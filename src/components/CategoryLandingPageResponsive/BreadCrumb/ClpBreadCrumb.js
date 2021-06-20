import React from 'react';
import {Link} from 'react-router-dom';

import './ClpBreadCrumb.css';

function ClpBreadCrumb() {
    return (
        <div className="clpBreada">
            <Link to="/Home"><span className="homeCrumb">Home</span></Link>
            <p>/</p>
            <Link to="/CategoryLanding"><span className="clpa">Category Landing</span></Link>
        </div>
    );
  }

export default ClpBreadCrumb;
