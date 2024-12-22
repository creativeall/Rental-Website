import React from 'react';
import Hero from './Hero/Hero';
import Quality from './quality/Quality';
import Recent from './recent/Recent';
import ItemCollection from './itemCollections/ItemCollection';
import Price from './price/Price';

const Home = () => {
  return (
    <>
        <Hero />
        <Quality />
        <Recent />
        <ItemCollection />
        <Price />
    </>
  )
}

export default Home;