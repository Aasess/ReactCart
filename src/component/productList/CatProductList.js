import React from 'react'

const CatProductList = (props) => {
    const filterProduct = props.selectProduct.filter((product)=>{
                        return product.category === props.categoryname
    })
    const displayCategoryProduct = filterProduct.map((product)=>{
        return(<div className="row border rounded mr-3 mb-2 mt-1 productall" key={product.id} style={{backgroundColor:'white'}}>
            <div className="col-12 col-md-3 ">
            
                <img src={product.image} alt={product.id} className="img-thumbnail " width="250px"/>
            </div>

            <div className="col-12 col-md-6 pt-3">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p className="float-left priceproduct">$ {product.price}</p>
            </div>

            <div className="col-12 col-md-3 float-right pt-4">
                <button type="button" className="btn btn-primary btn-sm mb-3 ml-3" onClick={()=>props.displayItem({product})}>View Item</button>
                <button type="button" className="btn btn-info btn-sm mb-3 ml-3" onClick={()=>props.addCart({product})}>Add to Cart</button>
            </div>

        </div>)
    })

    return (
        <div>
            {displayCategoryProduct}
        </div>
    )
}

export default CatProductList
