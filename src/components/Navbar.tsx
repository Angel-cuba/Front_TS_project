import React, { useContext } from 'react';
import { ThemeManager } from '../Context/Context';
import '../Styles/Components/Navbar.scss';

const Navbar = () => {
  const { theme } = useContext(ThemeManager);
  console.log('theme from Navbar : ', theme);
  return <div className="navbar">Navbar</div>;
};

export default Navbar;
