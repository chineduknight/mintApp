import React from 'react';
const SideGroup = ({ items }) => {
  return (
    <div class='list'>
      <ul>
        {items.map((item, index) => {
          return (
            <li>
              {index === 0 ? (
                <span></span>
              ) : (
                <img
                  src={require(`../../../img/icons/${item.image}.svg`)}
                  alt=''
                />
              )}{' '}
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideGroup;
