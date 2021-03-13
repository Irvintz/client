import React from 'react';
import Banner from "./Banner/Banner";
import Navigation from './Navigation/Naviagtion';
import Search from "./Search/Search";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Search />
      
    </div>
  )
}

export default Home
