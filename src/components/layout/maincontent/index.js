import React from 'react';
import Card from './Card';
// import Table from './Table';
import { CARD_ITEMS } from '../../constants';
const MainSection = () => {
  return (
    <div className='main-content'>
      <div style={{ display: 'flex' }}>
        {CARD_ITEMS.map(item => {
          return <Card items={item} />;
        })}
      </div>
    </div>
  );
};

export default MainSection;
