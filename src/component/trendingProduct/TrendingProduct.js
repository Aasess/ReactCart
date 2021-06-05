import React from 'react';
import { useSelector } from 'react-redux';

import "./TrendingProduct.css"

const TrendingProduct = () => {
    const products = useSelector((state)=> state.product.products )
    //filter out trenond product 
    const trendProduct = products.filter((product)=>{
        return product.trending
    }) 

    const display = trendProduct.slice(0,6).map((product)=>{
        return(
            <div className="col-6 col-md-2">
                <div className="card fproduct" >
                    <img className = "card-top-img" src={product.image} alt={product.id} />
                    <div className="middle">
                        <button className="btn btn-sm btn-info">Add to Cart</button>
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
