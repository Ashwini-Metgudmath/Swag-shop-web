import React, { Component } from 'react';
import './product.css';

class Product extends Component{
    render(){
        return(
       <div className="card product">
           <img alt="product" className="card-image-top" src={this.props.imgUrl}></img>
           <div className="card-block">
               <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">Price: ${this.props.price}</p>
               <a className="btn btn-primary" href="#">Add to wish list</a>
           </div>
       </div>
       );
    }
}

export default Product;