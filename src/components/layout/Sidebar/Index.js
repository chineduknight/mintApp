import React from 'react';
import SideGroup from './SideGroup';
import { SIDE_ITEMS, SIDE_ITEMS2, SIDE_ITEMS3 } from '../../constants';

const SideBar = () => {
  return (
    <aside>
      <div className='p-1'>
        <a href='#'>GENERATE INVOICE</a>
      </div>
      <SideGroup items={SIDE_ITEMS} />
      <SideGroup items={SIDE_ITEMS2} />
      <SideGroup items={SIDE_ITEMS3} />
    </aside>
  );
};

export default SideBar;
