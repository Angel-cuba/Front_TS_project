import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { ThemeManager } from '../Context/Context';

import '../Styles/App.scss';

export default function Home() {
  const { theme } = useContext(ThemeManager);

  return (
    <div className={theme === 'light' ? 'Principal' : 'Principal-Dark'}>
      <Navbar />
      <h1>Home page</h1>
    </div>
  );
}
