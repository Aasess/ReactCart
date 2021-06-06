import React from 'react';
import './Search.css';
import SearchDataList from './SearchDataList';
// import {showSuggestion} from '../../features/productSlice';
// import {useDispatch,useSelector} from 'react-redux';

const Search = () => {
    // const dispatch = useDispatch()
    // const isSuggestionBox = useSelector((state)=> state.showSuggestion)

    const [value,setValue] = React.useState('');
    const [hideSuggestion,setHideSuggestion] =React.useState(true)
    
    const handleSearch = (e) => {
        setValue(e.target.value)
        setHideSuggestion(false)
    }
    
    return (
        <div className="search w-75">
            <div className="input-group input-group-md mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text ml-5" id="basic-addon1"><i className="fas fa-search"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search For Product..." onChange={(e)=>handleSearch(e)} value={value}/>
            </div>
            {/* <datalist id="datalist">
                { value!=='' && <SearchDataList value={value} />}
            </datalist> */}
            <div className="list-group ml-5" >
            { value!=='' && <SearchDataList value={value} setValue={setValue} setHideSuggestion={setHideSuggestion} hideSuggestion={hideSuggestion}/>}
            </div>
          
           
        </div>
    )
}

export default Search
