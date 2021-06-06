import React from 'react'
import {useSelector} from 'react-redux'

const SearchDataList = (props) => {  
    const searchResult = []  
    const selectProduct = useSelector((state)=> state.product.products)
        selectProduct.forEach((product)=>{       
                        if(product.title.toLowerCase().indexOf(props.value.toLowerCase()) > -1){
                        searchResult.push(product.title)        // push matched title name to a list  
                    }})
        const result = searchResult.map((eachResult,i)=>{
            return(
                    <option key={i}>{eachResult}</option>  // options to be rendered on datalist
                )
        })
      
        return(
            <>
                {result}
            </>
        )
   
}


export default SearchDataList
