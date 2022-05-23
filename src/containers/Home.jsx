import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => (
  <>
    <Helmet>
      <title>Gapsi Shop</title>
    </Helmet>
    <Products products={initialState.products} />
  </>
);

export default Home;
