import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {item,cart} from '../../features/productSlice'
import Search from '../search/Search';

const ProductList = () => {
    const selectProduct = useSelector((state)=> state.product.products)
    // const singleProduct = useSelector((state)=> state.product.currentItem)
    // const cartprev = useSelector((state)=>state.product.cart)
    const dispatch = useDispatch()
    const displayItem = (product) => {
        dispatch(item({
            product:product.product
        }))
    }

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
    const display = selectProduct.map((product)=>{
        return(<div className="row border rounded mr-3 mb-2 mt-1 productall" key={product.id} style={{backgroundColor:'white'}}>
            <div className="col-12 col-md-3 ">
            
                <img src={product.image} alt={product.id} className="img-thumbnail "/>
            </div>

            <div className="col-12 col-md-6 pt-3">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p className="float-left priceproduct">$ {product.price}</p>
            </div>

            <div className="col-12 col-md-3 float-right pt-4">
                <button type="button" className="btn btn-primary btn-sm mb-3 ml-3" onClick={()=>displayItem({product})}>View Item</button>
                <button type="button" className="btn btn-info btn-sm mb-3 ml-3" onClick={()=>addCart({product})}>Add to Cart</button>
            </div>

        </div>)
    })
    return (
            <div>
                <Search />
                <div className="productlist mb-3">
                    {display}
                </div>
            </div>
                    
                    
                
                
            )
}

export default ProductList
