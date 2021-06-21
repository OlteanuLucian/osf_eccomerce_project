import React from 'react'
import "../../../../node_modules/semantic-ui-css/semantic.min.css"
import "./Item.css";
import {Dropdown} from "semantic-ui-react";

import Pdp1 from "../../Img/PdpImages/PG.10216885.JJ8UTXX.BZ.jpg";
import Pdp2 from "../../Img/PdpImages/PG.10216885.JJ8UTXX.PZ.jpg";
import Pdp3 from "../../Img/PdpImages/PG.10216885.JJ169XX.BZ.jpg";
import Pdp4 from "../../Img/PdpImages/PG.10216885.JJ169XX.PZ.jpg";

import Facebook from "../../Img/Socialicons/facebookIco.png";
import Google from "../../Img/Socialicons/googleIco.png";
import Twitter from "../../Img/Socialicons/twitterIco.png";
import Pinterest from "../../Img/Socialicons/pinterestIco.png";


class Item extends React.Component{

    

    state = {
      product: 
        {
          "_id": "1",
          "src": [
              Pdp2,
              Pdp1,
              Pdp3,
              Pdp4
            ],
          "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
          "price": 299.99,
          "colors":["red","black","purple","teal"],
          "count": 0
        },
      
      index: 0
    };
  
    myRef = React.createRef();
  
    handleTab = index =>{
       this.setState({index: index})
       const images = this.myRef.current.children;
  
       for(let i=0; i<images.length; i++){
          images[i].className = images[i].className.replace("active", "");
        }
  
        images[index].className = "active";
    };
  
    setQtyIncrease = () => {
        
        this.setState( prevState => ({
            product:{
                ...prevState.product, 
                "count":this.state.product["count"]+=1
            }
        }
        ))
    };

    setQtyDecrease = () => {
        
        if (this.state.product["count"] > 0) {
            this.setState( prevState => ({
            product:{
                ...prevState.product, 
                "count":this.state.product["count"]-=1
            }
        }
        ))}
    };



    render(){
      const {product, index} = this.state;
      const friendOptions = [
          {
            key: 'Dark Gray',
            text: 'Dark Gray',
            value: 'Dark Gray',
            image: { avatar: true, src: 'https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-dark-gray-circle-png-image_2381995.jpg' },
          },
          {
            key: 'Red',
            text: 'Red',
            value: 'Red',
            image: { avatar: true, src: 'data:image/png;base64,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' },
          },
          {
            key: 'Blue',
            text: 'Blue',
            value: 'Blue',
            image: { avatar: true, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Light_Blue_Circle.svg/240px-Light_Blue_Circle.svg.png' },
          },
        ]
      return(
        <div className="appPDP">
          {
            
                
              <div className="details" key={product._id}>
                  <div className="big-img">
                      <img src={product.src[index]} alt=""/>
                  </div>
  
                  <div className="thumb" ref={this.myRef}>
                      {
                          product.src.map((img, index) =>(
                              <img src={img} alt="" key={index}
                              onClick={() => this.handleTab(index)}/>
                          ))
                      }
                  </div>
                      
                  <div className="boxPDP">
                      <div className="rowPDP">
                          <span className="itemPrice">${product.price}</span>
                      </div>
                      <div className="customSelectDiv">
                          <Dropdown
                              fluid
                              selection
                              options={friendOptions}
                              defaultValue={friendOptions[0].value}
                          />
                      </div>
  
                      <div className="counterDiv">
                          <button className="buttonMinus"onClick={this.setQtyDecrease}><span> - </span></button>

                          <input type="number" className="buttonNumber" value={product["count"]} />

                          <button className="buttonPlus" onClick={this.setQtyIncrease}><span> + </span></button>
                      </div>
  
                      <div className="colors">
                          {
                              product.colors.map((color, index) =>(
                                  <button style={{background: color}} key={index}></button>
                              ))
                          }
                      </div>
                      
                      <button className="cartPDP">Add to cart</button>
  
                      <p className="itemContentPDP">{product.content}</p>
  
                      <button className="readMore">Read more</button>
                      
                      <div className="bottomDiv">
                          <button className="shareBtn styleButton">Share</button>
                          <button className="fbBtn styleButton"><img src={Facebook} alt=""></img></button>
                          <button className="ggBtn styleButton"><img src={Google} alt="" /></button>
                          <button className="twBtn styleButton"><img src={Twitter} alt="" /></button>
                          <button className="pinBtn styleButton"><img src={Pinterest} alt="" /></button>
                      </div>
                  </div>
              </div>
            }          
        </div>
      );
    };
}
  
  export default Item;

