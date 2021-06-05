import React from 'react'
import Nav from '../nav/Nav';
import './Cart.css'
import { useSelector,useDispatch } from 'react-redux';

import {cartFilter} from '../../features/productSlice';

const Cart = () => {
    const cartProduct = useSelector((state)=>state.product.cart)
    const dispatch = useDispatch()
    // const cartdetail = useSelector(state => state.product.cart)
    const handleDelete = (id) =>{
        dispatch(cartFilter({
            id: id
        }))
    }

    //function to display qty and price
    const qtyDisplay = () => {
        let qty_sum = 0
        let price = 0
        cartProduct.forEach((product)=>{
        qty_sum += product.qty  
        price += product.qty * product.price              
        })
        return {qty_sum,price}
    }

    const cartProducts = cartProduct.map((product)=>{
        return(
            <div className="row border rounded bg-white mr-auto mb-2 " key={product.id}>
                <div className="col-12 col-md-3 p-0">
                    <img src={product.image} alt={product.id} className="img-thumbnail"/>
                </div>
            <div className="col-md-5 ml-2 mt-3">
                    <p>{product.title}</p>
                    <br />
                    <p className="mt-2 price">$ {product.price}</p>
            </div>
            <div className="col-md-3 ml-5 mt-3">
                {/* <small>Qty:<input type="number" className=" input-sm w-25" min="0" defaultValue="1"/></small> */}
                <small className="ml-4">QTY: {product.qty}</small>
                <br/>
                <button className="ml-4 mt-4 btn delete" onClick={()=>handleDelete(product.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
        )    
})
    return (
        <div>
            <Nav />
            {/* display empty message when no product in the cart */}
            {
                cartProduct.length === 0?<h3 className="text-center mt-5" style={{color:"#8b0000"}}>No products in the cart</h3>
                :
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            { cartProducts }
                        </div>
                        <div className="col-12 col-md-3 border rounded bg-white pt-4 summary" style={{height:'200px'}}>
                           <h4>Cart Summary</h4>
                           <hr />
                           <div>
                               Quantity:<span className="float-right">{qtyDisplay().qty_sum}</span>
                               <hr/>
                               Total: <strong className="text-success float-right">$ {qtyDisplay().price}</strong>
                           </div>
                        </div>
                    </div>
                </div>
            }
             
            
        </div>
    )
}

export default Cart
