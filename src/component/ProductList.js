import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {item,cart} from '../features/productSlice'


const ProductList = () => {
    const selectProduct = useSelector((state)=> state.product.products)
    // const singleProduct = useSelector((state)=> state.product.currentItem)
    const cartprev = useSelector((state)=>state.product.cart)
    const dispatch = useDispatch()
    console.log(cartprev)
    const displayItem = (product) => {
        dispatch(item({
            product:product.product
        }))
    }

    const addCart =(product) => {
        // console.log(product.product)
        dispatch(cart({
            product:product.product.id
        }))
    }
    const display = selectProduct.map((product)=>{
        return(<div className="row border rounded m-3 p-3" key={product.id} style={{backgroundColor:'white'}}>
            <div className="col-3">
            
                <img src={product.image} alt={product.id} className="img-thumbnail"/>
            </div>

            <div className="col-6">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <h5 className="float-left ">$ {product.price}</h5>
            </div>

            <div className="col-3 float-right mt-4">
                <button type="button" className="btn btn-primary btn-sm mb-3 ml-3" onClick={()=>displayItem({product})}>View Item</button>
                <button type="button" className="btn btn-info btn-sm mb-3 ml-3" onClick={()=>addCart({product})}>Add to Cart</button>
            </div>

        </div>)
    })
    return (
                <div className="container">
                    {display}
                </div>
                
            )
}

export default ProductList
