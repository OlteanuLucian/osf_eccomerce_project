import React from 'react'

import "./Items.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faPlus} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card"


const Items = ({itemsToRender}) => {
    return (
        <div>
            {itemsToRender.map(({title, price, cardImg, id}) => (
                <Card className = "styleItemsCard" key={id}>
                    <Card.Img className = "styleItemsCardImg" variant = "top" src={cardImg}/>
                    <Card.Body className="stylesItemsCardBody">
						<Card.Title className="styleItemsCardTitle">{title}</Card.Title>
						<Card.Text className="styleItemsCardPrice">$ {price}</Card.Text>
					</Card.Body>

                    <div className = "styleItemsOverlay">
                        <div className = "styleItemsPlus">
                            <FontAwesomeIcon icon = {faPlus} />
                        </div>
                        <div className = "styleItemsHeart">
                            <FontAwesomeIcon icon = {faHeart}/>
                        </div>
                    </div>
                
                </Card>

                
            ))}
        </div>
    )
}

export default Items;
