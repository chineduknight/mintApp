import React from 'react';

const Card = ({ items }) => {
  return (
    <div className='card p-1'>
      <ul>
        <li>{items.label}</li>
        <li>{items.price}</li>
      </ul>
      <img src={require('../../../img/graph.svg')} alt='' />
    </div>
  );
};

export default Card;
