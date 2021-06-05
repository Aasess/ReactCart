/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css'
// import {logout} from '../features/userSlice'
import ProductList from '../productList/ProductList'
import ProductSingle from '../productSingle/ProductSingle'
import TrendingProduct from '../trendingProduct/TrendingProduct'

// import {item,cartEmpty} from '../features/productSlice'
import Nav from '../nav/Nav';

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
                <div className="container-fluid">
                    {/* {state?<ProductList />:<ProductSingle />} */}
                    <div className="row mt-3">
                        <div className="col-3 ml-3 pl-5 mb-3 border bg-white">
                            <h3>Category</h3>
                        </div>
                        <div className="col-8 ">
                            <ProductList />
                        </div>
                    </div>

                    <div className="row pr-3 ">
                        <div className="col-11 mt-2 mb-4 ml-3 pl-5 bg-white border">
                        <h4 className="pt-3">Trending products<span className="float-right pt-2 pr-2" style={{fontSize:"1rem"}}>View All <i className="fas fa-arrow-right"/></span></h4>
                        <hr/>
                        <TrendingProduct />
                        </div>
                    </div>
                    
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