import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <div className="search w-75">
            <div className="input-group input-group-md mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text ml-5" id="basic-addon1"><i className="fas fa-search"></i></span>
                </div>
                <input type="search" className="form-control" placeholder="Search For Product..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}

export default Search
