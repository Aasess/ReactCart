/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../home/Home.css'

const CartButton = () => {
    const cartProduct = useSelector((state)=>state.product.cart)
    //function to display qty
    const qtyDisplay = () => {
        let qty_sum = 0
        cartProduct.forEach((product)=>{
        qty_sum += product.qty                
        })
        return qty_sum
    }
    return (
        
        <>
            <Link to="/cart"><a className="float-right p-4 mr-5 pointer cart mb-3" >
                <img src="https://s3.amazonaws.com/nuggetcomfort/cart_icon.png" alt="cart-icon" width="55px"/>
                    <div className="cart-count text-center">{qtyDisplay()}</div>
                </a>
            </Link>
        </>
    )
}

export default CartButton
