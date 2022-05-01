import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Input } from '../components/Input';
import Navbar from '../components/Navbar';
import { ThemeManager } from '../Context/Context';

import '../Styles/App.scss';

const Home = () => {
  const { theme } = useContext(ThemeManager);
  const [value, setValue] = useState<string>('');
  console.log(value);

  //Redux
  useSelector((state: any) => console.log(state));

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
