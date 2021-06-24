import React from 'react';
import Navs from './Navs';
import Title from '../pages/Title';

const MainPageLayout = ({ childern }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for Movies or an Actor?"
      />
      <Navs />

      {childern}
    </div>
  );
};

export default MainPageLayout;
