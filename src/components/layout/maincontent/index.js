import React from 'react';
import Card from './Card';
import Table from './Table';
import BigCard from './BigCard';
import { CARD_ITEMS } from '../../constants';
import Chart from '../../Chart';
const MainSection = () => {
  return (
    <div className='main-content'>
      <div style={{ display: 'flex' }}>
        {CARD_ITEMS.map(item => {
          return <Card items={item} />;
        })}
      </div>
      <div id='showcase'>
        <div className='graph'>
          <Chart />
        </div>
        <div>
          <BigCard />
          <BigCard />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default MainSection;
