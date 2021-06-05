import React from 'react'
import { useSelector } from 'react-redux';

const ProductSingle = () => {
    const selectProduct = useSelector((state)=>state.product.currentItem)
    return (
        <div className="container">
            <div className="mt-3 mb-3 text-center">
                <h4 className="">{selectProduct.title}</h4>
            </div>
            <div className="row">
                <div className = "col-7 mx-auto">
                    <img src={selectProduct.image} alt={selectProduct.id} className="img-thumbnail " width="800px"/>
                </div>
            
            </div>
            <div className="row mb-5 mt-3">
                {selectProduct.description}
                {selectProduct.detail}
            </div>
        </div>
    )
}

export default ProductSingle
