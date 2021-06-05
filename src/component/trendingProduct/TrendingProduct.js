import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {cart} from '../../features/productSlice'
import "./TrendingProduct.css"

const TrendingProduct = () => {
    const products = useSelector((state)=> state.product.products )
    const dispatch = useDispatch()
    //filter out trenond product 
    const trendProduct = products.filter((product)=>{
        return product.trending
    }) 

    //add to cart button is clicked
    
    const addCart =(product) => {
        // console.log(product.product)
        dispatch(cart({
            id:product.product.id,
            title:product.product.title,
            price:product.product.price,
            image:product.product.image,
            qty: 1
        }))
    }

    const display = trendProduct.slice(0,6).map((product)=>{
        return(
            <div className="col-6 col-md-2">
                <div className="card fproduct" >
                    <img className = "card-top-img" src={product.image} alt={product.id} />
                    <div className="middle">
                        <button className="btn btn-sm btn-info"  onClick={()=>addCart({product})}>Add to Cart</button>
                    </div>
                    <div className="card-body">
                        <p className="card-text" style={{fontSize:"0.9rem"}}>{product.title}<span className="float-right">${product.price}</span></p>
                    </div>
                </div>
            </div>)
    })
    
    return (
        <div className="row mb-3">
            { display }
        </div>
    )
}

export default TrendingProduct
