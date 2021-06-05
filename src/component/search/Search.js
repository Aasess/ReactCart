import React from 'react'

const Search = () => {
    return (
        <div className="search fixed-top mt-4">
            <div className="input-group input-group-sm mx-auto w-50">
                <div className="input-group-prepend">
                    <span className="input-group-text ml-5" id="basic-addon1"><i className="fas fa-search"></i></span>
                </div>
                <input type="search" class="form-control" placeholder="Search For Product..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}

export default Search
