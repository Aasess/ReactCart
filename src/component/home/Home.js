/* eslint-disable */
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {searchItem} from '../../features/productSlice';

import './Home.css'
// import {logout} from '../features/userSlice'
import ProductList from '../productList/ProductList'
import Category from '../category/Category'
import ProductSingle from '../productSingle/ProductSingle'
import TrendingProduct from '../trendingProduct/TrendingProduct'
import CartButton from '../cart/CartButton'

// import {item,cartEmpty} from '../features/productSlice'
import Nav from '../nav/Nav';

const Home = () => {
    const dispatch = useDispatch()
    const [categoryname,setCategoryname] = React.useState(null)
    const singleProduct = useSelector((state)=> state.product.currentItem)
   
    // if(singleProduct != null){
    //     setState(false)
    // }

    //function to call when category is hovered
    const filterProduct=(name)=>{
        setCategoryname(name)
        dispatch(searchItem({
            value:null
        }))
        
    }

    if(singleProduct == null){
        return (
            <div>
                <Nav catFunction = {filterProduct}/>
                <div className="container-fluid">
                    {/* {state?<ProductList />:<ProductSingle />} */}
                    <div className="row mt-3">
                        <div className="col-2 ml-5 pl-5 mr-2 border rounded bg-white">
                            <h3 className="mt-3 pl-2">Category</h3>
                            <hr/>
                            <Category catFunction = {filterProduct}/>
                        </div>
                        <div className="col-9 border bg-white rounded">
                            <h3 className="mt-3 pl-2">Products</h3>
                            <hr/>
                                <ProductList categoryname= {categoryname}/>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-11 mt-2 mb-4 ml-5 pl-5 bg-white border rounded">
                        <h4 className="pt-3">Trending products<span className="float-right pt-2 pr-2" style={{fontSize:"1rem"}}><Link to="/trendingproducts">View All <i className="fas fa-arrow-right"/></Link></span></h4>
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