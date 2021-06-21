import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./TitlePDP.css";

function TitlePDP(){
    return (
        <div className = "titlePDP">
            <div className = "breadcrumbPDP">
                <Link to ="/Home"><span className = "homeCrumbPDP">Home</span></Link>
                <p className = "slashBC">/</p>
                <Link to ="/Home"><span className = "homeCrumbPDP">OSF Theme</span></Link>
                <p className = "slashBC">/</p>
                <p className ="activeBC">Ruffle Front V-Neck Cardigan</p>
            </div>

            <div className = "titleArticle">
                <h4 className = "linePDP">
                    <span className = "popularItemPDP">
                        Ruffle Front V-Neck Cardigan
                    </span>
                </h4>
            </div>
        </div>

    )
}

export default TitlePDP;
