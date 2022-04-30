import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { ThemeManager } from '../Context/Context';

export default function Home() {
  const { theme } = useContext(ThemeManager);
  console.log('theme is : ', theme);
  return (
    <>
      <Navbar />
      <h1>Home page</h1>
    </>
  );
}
