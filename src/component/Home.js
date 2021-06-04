/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css'
// import {logout} from '../features/userSlice'
import ProductList from './ProductList'
import ProductSingle from './ProductSingle'
// import {item,cartEmpty} from '../features/productSlice'
import Nav from './Nav';

const Home = () => {
    const singleProduct = useSelector((state)=> state.product.currentItem)
    const cartProduct = useSelector((state)=>state.product.cart)
    
   //function to display qty
    const qtyDisplay = () => {
        let qty_sum = 0
        cartProduct.forEach((product)=>{
        qty_sum += product.qty                
        })
        return qty_sum
    }
    
   
    // if(singleProduct != null){
    //     setState(false)
    // }

    if(singleProduct == null){
        return (
            <div>
                <Nav />
                <div>
                    {/* {state?<ProductList />:<ProductSingle />} */}
                    <ProductList />
                </div>
                <Link to="/cart"><a className="float-right p-4 mr-5 pointer cart mb-3" >
                <img src="https://s3.amazonaws.com/nuggetcomfort/cart_icon.png" width="55px"/>
                    <div className="cart-count text-center">{qtyDisplay()}</div>
                </a>
                </Link>
            </div>
        )
    }
    else{
        return(
            <div>
                <Nav />
                <div>
                    <ProductSingle />
                </div>
            </div>
        
        )
    }
   
   
}
export default Home;