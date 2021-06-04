import React from 'react'
import { useSelector } from 'react-redux';

const ProductSingle = () => {
    const selectProduct = useSelector((state)=>state.product.currentItem)
    console.log(selectProduct)
    return (
        <div className="container">
            <div className="mt-3 mb-3 text-center">
                <h4 className="">{selectProduct.title}</h4>
            </div>
            <div className="row">
            <img src={selectProduct.image} alt={selectProduct.id} className="w-75 img-thumbnail mx-auto d-block"/>
            </div>
            <div className="row mb-5 mt-3">
                {selectProduct.description}
                {selectProduct.detail}
            </div>
        </div>
    )
}

export default ProductSingle
