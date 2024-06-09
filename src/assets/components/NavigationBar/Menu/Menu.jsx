import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Menu.css";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="menu-button menu-button-with-icon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      <ChevronDownIcon w={5} h={5} color="gray.300" className="down-icon" />
      {isOpen && (
        <div
          className="dropdown-menu"
          style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? '1' : '0' }}
        >
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Menu = () => {
  const dropdownMenus = [
    {
      title: 'Peluquería',
      url:'/peluqueria',
      items: [
        { label: 'Corte', url: '/corte' },
        { label: 'Color', url: '/color' },
        { label: 'Brushing', url: '/brushing' },
        { label: 'Mechas', url: '/mechas' },
        { label: 'Alisados', url: '/alisados' },
        { label: 'Extensiones', url: '/extensiones' },
      ],
    },
    {
      title: 'Estética',
      url:'/estetica',
      items: [
        { label: 'Faciales', url: '/faciales' },
        { label: 'Uñas', url: '/unas' },
        { label: 'Pestañas', url: '/pestanas' },
        { label: 'Cejas', url: '/cejas' },
      ],
    },
    {
      title: 'Salón',
      url:'/salon',
      items: [
        { label: 'Nosotros', url: '/nosotros' },
        { label: 'Fotos', url: '/fotos' },
      ],
    },
  ];

  return (
    <div className="menu">
      {dropdownMenus.map((menu, index) => (
        <Link to={menu.url}>
          <DropdownMenu key={index} title={menu.title} items={menu.items} />
        </Link>
      ))}
      <Link to="/barberia" className="menu-button">
        Barberia
      </Link>
    </div>
  );
};

export default Menu;