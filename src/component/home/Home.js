/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css'
// import {logout} from '../features/userSlice'
import ProductList from '../productList/ProductList'
import ProductSingle from '../productSingle/ProductSingle'
import TrendingProduct from '../trendingProduct/TrendingProduct'
import CartButton from '../cart/CartButton'
// import {item,cartEmpty} from '../features/productSlice'
import Nav from '../nav/Nav';

const Home = () => {
    const singleProduct = useSelector((state)=> state.product.currentItem)
   
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
                        <div className="col-3 ml-5 pl-5 mr-2 border rounded bg-white">
                            <h3>Category</h3>
                        </div>
                        <div className="col-8 border bg-white rounded">
                            <h3 className="mt-3 pl-2">All products</h3>
                            <hr/>
                            <ProductList />
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-11 mt-2 mb-4 ml-5 pl-5 bg-white border rounded">
                        <h4 className="pt-3">Trending products<span className="float-right pt-2 pr-2" style={{fontSize:"1rem"}}><Link to="/tendingproducts">View All <i className="fas fa-arrow-right"/></Link></span></h4>
                        <hr/>
                        <TrendingProduct />
                        </div>
                    </div>
                    
                </div>
                <CartButton />
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