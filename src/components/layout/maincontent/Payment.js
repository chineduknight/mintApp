import React from 'react';

const Payment = () => {
  return (
    <div className='payment my-2'>
      <h1>Payments</h1>
      <div className='payment-area'>
        <p>Showing 20 out of 5000</p>
        <div className='search-container'>
          <form>
            <button type='submit'>
              <img src={require('../../../img/search.svg')} alt='SearchBar' />
            </button>
            <input type='text' placeholder='Search..' name='search' />
          </form>
        </div>
        <div>
          Show
          <div className='dropdown'>
            <button className='dropbtn'>All</button>
            <div className='dropdown-content'>
              <a>All</a>
              <a>Reconcilled</a>
              <a>Un-reconcilled</a>
              <a>Settled</a>
              <a>Unsettled</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
