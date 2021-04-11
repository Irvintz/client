import React from 'react';
import Banner from "./Banner/Banner";
import Navigation from './Navigation/Naviagtion';
import Search from "./Search/Search";
import SearchResult from "./SearchResult/SearchResult";


function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Search />
      <SearchResult />

    </div>
  );
}

export default Home
