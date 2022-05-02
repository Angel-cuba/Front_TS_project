import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '../components/Input';
import Navbar from '../components/Navbar';
import { ThemeManager } from '../Context/Context';
import { CountriesData } from '../interfaces/Country';

import '../Styles/App.scss';
type State = {
  state: CountriesData[];
};

const Home = () => {
  const { theme } = useContext(ThemeManager);
  const [value, setValue] = useState<string>('');
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  //Redux
  useSelector((state) => {
    console.log(state);
  });

  // useEffect(() => {
  //   console.log(fetchAll());
  // });

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={theme === 'light' ? 'Principal' : 'Principal-Dark'}>
      <Navbar />
      <Input value={value} onChange={handleValue} />
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
