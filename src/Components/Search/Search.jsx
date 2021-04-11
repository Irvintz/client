import React, { useState } from 'react';
import axios from 'axios'
import "./Search.css"


const Search = () => {
  const [bookSearched, setBookSearched] = useState("");
  const [results, setResults] = useState([]);
  const [totalSearchCount, setTotalSearchCount] = useState(0);

  const handleChange = (e) => { 
    setBookSearched(e.target.value)
  }

  const SearchBook = (e)=>{
  // alert(bookSearched)

    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearched}`

  axios.get(url).then((response) =>{
    const {items, totalItems} = response.data
    console.log(response.data);
    console.log(items);
    setTotalSearchCount(items.length);
    setResults(items);
  })
  .catch((error) =>{
  console.log(error);})


  }

  return (
    <div className="search">
      <input onChange={handleChange} value={bookSearched} type="text" placeholder='Search For Books' />
      <button onClick={SearchBook} className="search-button">Search</button>
      
      {
        results.length != 0 ? <div>
          <div classname="search-results-number">
            <h3>{`Total Search Result: ${totalSearchCount}`}</h3> 
            {
              results.map((book, index)=>{

                return(
                <div className="book">
            {
              results && <div class="holder">
                  <span><img src={book.volumeInfo.imageLinks.thumbnail} />
                  <h4>{book.volumeInfo.title}</h4>
                  <p>{`Author / Authors: ${book.volumeInfo.authors}`}</p></span>
                  
                  <button> Save</button>
                  <button className="save-button"> Read More</button>
                
                </div>
             
              
            }
            </div>
                )


              })

            }


      


      </div>
      
    </div>
    : null
    }
    </div>
    )
    }
      
    
    
      export default Search