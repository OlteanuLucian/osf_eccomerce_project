import React, {Component} from 'react'
import data from "../../Data/Data.js";

import Plus from '../../Img/Plus.webp';
import Heart from '../../Img/Heart.webp';
import Load from '../../Img/Desktop/Cards/load.webp';

import "./Cards.css";


export class Cards extends Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    operation(id){
        this.setState({
            show:true,
            id:id
            
        })
    }
    
    render() {
        return (
            <div>
                cards page test
            </div>
        )
    }
    
    
}

export default Cards;
