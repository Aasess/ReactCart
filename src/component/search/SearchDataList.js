import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {searchItem} from '../../features/productSlice'

const SearchDataList = (props) => {
    const dispatch = useDispatch()  
    const searchResult = []  
    const selectProduct = useSelector((state)=> state.product.products)
    const handleSearch = (eachResult) => {
        dispatch(searchItem({
            value:eachResult
        }))
        props.setValue(eachResult.title)
        props.setHideSuggestion(true)
    }
    
        
        selectProduct.forEach((product)=>{       
                        if(product.title.toLowerCase().indexOf(props.value.toLowerCase()) > -1){
                        searchResult.push(product)        // push matched product to a list  
                    }})
        let result = searchResult.map((eachResult,i)=>{
            return(
                    // <option key={i} value={eachResult}/>  // options to be rendered on datalist
                    <button type="button" className="list-group-item list-group-item-action" key={i} onClick={()=>handleSearch(eachResult)}>{eachResult.title}</button>
                )
        })
      if(!props.hideSuggestion){
        return(
            <>
                {result}
            </>
        )
      }
      else{
          return(<></>)
      }
        
   
}


export default SearchDataList
