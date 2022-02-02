import React, { useEffect } from 'react';

// Components
import Header from '../../Components/Header/index.jsx';
import ComingSoon from '../../Components/ComingSoon/index.jsx';
import GridMovies from '../../Components/GridMovies/index.jsx';
// Styles
import { ContentHome } from './HomeStyles.js';

const Home = () => {


  return (
    <ContentHome>
      <Header />
      <ComingSoon />
      <GridMovies />
    </ContentHome>
  )
};

export default Home;
