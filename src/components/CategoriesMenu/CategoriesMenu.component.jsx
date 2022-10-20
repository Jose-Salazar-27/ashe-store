//  External libraries dependencies
import { useState } from 'react';
import { motion } from 'framer-motion';

// Utilities
import { productsCategories } from '@/utilities';

// styled components
import { MenuContainer, MenuLink, MenuButton } from './categories-menu.styled';

export const CategoriesMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <MenuContainer>
      <div className='menu-header'>
        <h3 className='menu-title'>ALL CATEGORIES</h3>
      </div>
      <ul className={`menu-list ${open ? 'open' : ''}`}>
        {productsCategories.map((categorie, index) => {
          if (open) {
            return (
              <li key={categorie}>
                <MenuLink to={`/categories/${categorie}`}>{categorie}</MenuLink>
              </li>
            );
          }
          if (!open && index < 5) {
            return (
              <li key={categorie}>
                <MenuLink to={`/categories/${categorie}`}>{categorie}</MenuLink>
              </li>
            );
          }
        })}
        <MenuButton onClick={() => setOpen(!open)}>{`Show ${open ? 'less' : 'more'}`}</MenuButton>
      </ul>
    </MenuContainer>
  );
};
