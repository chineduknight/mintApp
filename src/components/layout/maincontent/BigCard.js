import React, { Fragment } from 'react';

const BigCard = () => {
  return (
    <Fragment>
      <div className='big-card p-1'>
        <h4>Orders</h4>
        <div className='line'></div>
        <ul>
          <li>
            Pending Orders: <span className='count count-secondary'>20</span>
          </li>
          <li>
            Reconcilled Orders: <span className='count count-green'>80</span>
          </li>
          <li>
            Total Orders: <span className='count count-primary'>100</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default BigCard;
