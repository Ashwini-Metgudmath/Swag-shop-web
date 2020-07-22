import React, { Component } from 'react';
import DataService from '../services/data-service'
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

class Wishlist extends Component{
    constructor(props){
        super(props);

        this.state = {WishList:[
            {
                title:"Bologna killer",
                price:20.99,
                product_id:1
            },
            {
                title:"Fu man chu",
                price:38.99,
                product_id:2
            },
            {
                title:"Pipe dream",
                price:55.99,
                product_id:3
            }
        ]};

        this.createWishList = this.createWishList.bind(this);
    }

    createWishList = () => {
        const list = this.state.WishList.map(product =>
            <ProductCondensed product={product} key={product.product_id} />
        )
        return (list);
    }

    render(){
        return(
       <div className="card">
           <div className="card-block">
               <h4 className="card-title">Wish list</h4>
                <ul className="list-group">
                    {this.createWishList()}
                </ul>
           </div>
       </div>
       );
    }
}

export default Wishlist;