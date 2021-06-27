import React from 'react';
import Navs from './Navs';
import Title from '../components/Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for Movies or an Actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
