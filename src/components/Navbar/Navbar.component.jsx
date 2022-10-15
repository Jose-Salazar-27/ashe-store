// External libreries dependencies
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MdSearch, MdAccessibilityNew, MdShoppingCart } from 'react-icons/md';

// Styled components
import { NavbarContainer } from './Navbar.styled';
import { Input, Button } from '@/styled-components';
import { productsCategories } from '@/utilities';

// Assets
import Logo from '@/assets/ashe-store-logo.png';

export const Navbar = () => {
  const { type, gray } = useContext(ThemeContext);

  const iconStyles = { width: '20px', height: '20px', color: `${type === 'light' ? gray : '#fff'}` };
  return (
    <NavbarContainer>
      <div className='logo-container'>
        <img src={Logo} className='logo' />
      </div>
      <div className='search-bar'>
        <select name='' id='' className='search-select'>
          {productsCategories.map(categorie => {
            return (
              <option key={categorie} className='option' value={categorie}>
                {categorie}
              </option>
            );
          })}
        </select>
        <Input className='input' placeholder='Write your search here' />
        <Button className='button'>
          <MdSearch style={{ ...iconStyles, color: '#fff' }} />
        </Button>
      </div>
      <div className='user-options'>
        <a href='#'>
          <span> My account</span>
          <MdAccessibilityNew style={iconStyles} />
        </a>
        <a href='#'>
          <span>My cart</span>
          <MdShoppingCart style={iconStyles} />
        </a>
      </div>
    </NavbarContainer>
  );
};
