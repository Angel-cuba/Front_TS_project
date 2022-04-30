import { useContext } from 'react';
import { ThemeManager } from '../Context/Context';
import { NavTheme } from '../interfaces/Theme';
import '../Styles/Components/Navbar.scss';
import ThemeToggle from './ThemeToggle';

const Navbar = (): JSX.Element => {
  const { theme } = useContext(ThemeManager);

  const navStyle: NavTheme = {
    light: 'navbar',
    dark: 'navbar-dark',
  };

  return (
    <div className={theme === 'light' ? navStyle.light : navStyle.dark}>
      <div className="navbar-img">
        <img
          src="https://res.cloudinary.com/dqaerysgb/image/upload/v1651333819/Earth-Planet-PNG-Picture_btbdtv.png"
          style={{ width: '10opx', height: '100px' }}
          alt=""
        />
      </div>
      <div className="emptyDiv"></div>
      <div className="navbar-buttons">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
