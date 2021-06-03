import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css'
// import {logout} from '../features/userSlice'
import ProductList from './ProductList'
import ProductSingle from './ProductSingle'
// import {item,cartEmpty} from '../features/productSlice'
import Nav from './Nav';

const Home = () => {
    // const [state,setState] = React.useState(true)
    
   

    const singleProduct = useSelector((state)=> state.product.currentItem)
    const cartProduct = useSelector((state)=>state.product.cart)
    
    
   
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
                <Link to="/cart"><a className="float-right p-4 mr-5 pointer cart" >
                <img src="https://s3.amazonaws.com/nuggetcomfort/cart_icon.png" width="55px"/>
                    <div className="cart-count text-center">{cartProduct.length}</div>
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