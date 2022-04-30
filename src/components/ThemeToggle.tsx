import { useContext } from 'react';
import { ThemeManager } from '../Context/Context';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeManager);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'light' ? 'outSide-light' : 'outSide'} onClick={handleTheme}>
      <FaMoon className="moon" />
      <FaSun className="sun" />
      <div className={theme === 'light' ? 'inside' : 'insideMove'}></div>
    </div>
  );
};

ThemeToggle.propTypes = {};

export default ThemeToggle;
