import React from 'react';
import "./Search.css"

const Search = () => {
  return (
    <div className="search">
      <div className="nav-left">
          <input type="text" placeholder='Search For Books'></input>
          <button className="search-button" >Search</button>
      </div>
    
    </div>
  )
}

export default Search