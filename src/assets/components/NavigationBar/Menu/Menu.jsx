import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
        <div className="dropdown-menu">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.label}</a>
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
      items: [
        { label: 'Corte', url: '#' },
        { label: 'Color', url: '#' },
        { label: 'Brushing', url: '#' },
        { label: 'Mechas', url: '#' },
        { label: 'Alisados', url: '#' },
        { label: 'Extensiones', url: '#' },
      ],
    },
    {
      title: 'Estética',
      items: [
        { label: 'Faciales', url: '#' },
        { label: 'Uñas', url: '#' },
        { label: 'Pestañas', url: '#' },
        { label: 'Cejas', url: '#' },
      ],
    },
    {
      title: 'Salón',
      items: [
        { label: 'Nosotros', url: '#' },
        { label: 'Fotos', url: '#' },
      ],
    },
  ];

  return (
    <div className="menu">
      {dropdownMenus.map((menu, index) => (
        <DropdownMenu key={index} title={menu.title} items={menu.items} />
      ))}
      <a href="https://valentinnasalon.cl/" className="menu-button">
        Barberia
      </a>
    </div>
  );
};

export default Menu;