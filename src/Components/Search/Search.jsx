import React, { useState } from 'react';

const Search = () => {
  const [bookSearched, setBookSearched] = useState("");

  const handleChange = (e) => { 
    setBookSearched(e.target.value)
  }

  const SearchBook = (e)=>{
    alert(bookSearched)
  }

  return (
    <div className="search">
      <div className="nav-left">
      <input onChange={handleChange} value={bookSearched} type="text" placeholder='Search For Books' />
      <button onClick={SearchBook} className="search-button">Search</button>
      </div>
    
    </div>
  )
}

export default Search