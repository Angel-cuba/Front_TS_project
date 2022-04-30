import { useContext } from 'react';
import { ThemeManager } from '../Context/Context';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeManager);
  console.log('theme from ThemeToggle : ', theme);

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="outSide" onClick={handleTheme}>
      <FaMoon className="moon" />
      <FaSun className="sun" />
      <div className={theme === 'light' ? 'inside' : 'insideMove'}></div>
    </div>
  );
};

ThemeToggle.propTypes = {};

export default ThemeToggle;
