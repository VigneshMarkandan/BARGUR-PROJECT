import React, { useState } from 'react';


const menuItems = [
  { id: 1, label: 'Menu Item 1', content: '' },
  { id: 2, label: 'Menu Item 2', content: 'Content for Menu Item 2' },
  { id: 3, label: 'Menu Item 3', content: 'Content for Menu Item 3' },
  { id: 4, label: 'Menu Item 4', content: 'Content for Menu Item 4' },
  { id: 5, label: 'Menu Item 5', content: 'Content for Menu Item 5' }
];

const MenuContent = () => {
  const [activeItem, setActiveItem] = useState(menuItems[0].id);

  const handleMenuClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="menu-content-container">

      <div className="menu">

          <div
            className={`menu-item ${activeItem === menuItems[0].id ? 'active' : ''}`}
            onClick={() => handleMenuClick(menuItems[0].id)}
          >
            {menuItems.label}
          </div>
      </div>
      <div className="content">
        {menuItems.map(item => (
          <div
            key={item.id}
            className={`content-item ${activeItem === item.id ? 'visible' : 'hidden'}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContent;
