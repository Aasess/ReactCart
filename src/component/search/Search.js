import React from 'react';
import './Search.css';
import SearchDataList from './SearchDataList';

const Search = () => {
    
    const [value,setValue] = React.useState('');
    const handleSearch = (e) => {
        setValue(e.target.value)
        
    }
    return (
        <div className="search w-75">
            <div className="input-group input-group-md mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text ml-5" id="basic-addon1"><i className="fas fa-search"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search For Product..." onChange={(e)=>handleSearch(e)}/>
            </div>
            {/* <datalist id="datalist">
                { value!=='' && <SearchDataList value={value} />}
            </datalist> */}
            <div className="list-group ml-5" >
            { value!=='' && <SearchDataList value={value} />}
            </div>
          
           
        </div>
    )
}

export default Search
