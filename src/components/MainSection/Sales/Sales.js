import React from "react";
import "./Sales.css";

import ImgSales from "../../Img/Main/summer_sales.png";
import Facebook from "../../Img/Socialicons/facebookIco.png";
import Card from "react-bootstrap/Card"

function Sales () {
    return (
        <Card className = "sales">
            <Card.Img className = "imageSale" src = {ImgSales} alt = "sales adv"/>

            <Card.Body>
                <Card.Title>
                    <span className = "textFollow" >Follow us on Facebook</span>
                </Card.Title>

                <Card.Text>
                    <span className = "textDetails">Sed ut perspiciatis unde omnis iste natus error sit </span>
                </Card.Text>

                <div className="facebookButton">
                    <button className = "btnSales" href="#">
                        <img className = "fb"src={Facebook} alt="facebookIcon"/>FOLLOW 
                    </button>
                </div>          
            
            </Card.Body>
        </Card>
    )
}
export default Sales;
