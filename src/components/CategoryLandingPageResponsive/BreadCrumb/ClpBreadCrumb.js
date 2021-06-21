import React from 'react';
import {Link} from 'react-router-dom';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import './ClpBreadCrumb.css';


function ClpBreadCrumb() {
    return(
        <div>
            <Breadcrumb className="styleBreadcrumb">
                <Breadcrumb.Item>
                    <Link to="/Home">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active> Category Landing Services</Breadcrumb.Item>
            </Breadcrumb>           
        </div>
    )
}
export default ClpBreadCrumb;