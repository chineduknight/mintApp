import React from 'react';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <div className='logo'>TrasMonitor</div>
        <div className='nav-items'>
          <ul>
            <li>Support</li>
            <li>FAQ</li>
            <li>
              <img src={require('../../img/bell.svg')} alt='' />
            </li>
            <li>
              <div id='side'>
                <div>
                  <span>Hello</span>
                  <div>Oloware something</div>
                </div>
                <div>
                  <img src={require('../../img/face.jpg')} alt='I am alt' />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
