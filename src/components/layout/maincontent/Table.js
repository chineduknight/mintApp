import React from 'react';

const Table = () => {
  return (
    <table id='customers'>
      <thead>
        <tr>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transaction No</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className='text'>VW </div>
            Apple Mac Book 15'' 250 SSD 12GB
          </td>
          <td>$73430</td>
          <td>123456789</td>
          <td>12:30</td>
          <td>
            <div className='last'>
              <span></span>
              Reconcilled
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className='text'>VW </div>
            Apple Mac Book 15'' 250 SSD 12GB
          </td>
          <td>$73430</td>
          <td>123456789</td>
          <td>12:30</td>
          <td>
            <div className='last'>
              <span></span>
              Reconcilled
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className='text'>VW </div>
            Apple Mac Book 15'' 250 SSD 12GB
          </td>
          <td>$73430</td>
          <td>123456789</td>
          <td>12:30</td>
          <td>
            <div className='last'>
              <span></span>
              Reconcilled
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className='text'>VW </div>
            Apple Mac Book 15'' 250 SSD 12GB
          </td>
          <td>$73430</td>
          <td>123456789</td>
          <td>12:30</td>
          <td>
            <div className='last'>
              <span></span>
              Reconcilled
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
