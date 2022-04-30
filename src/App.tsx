import { useState } from 'react';
import { ThemeManager } from './Context/Context';

import Routes from './Routes/Routes';

export default function App() {
  const [theme, setTheme] = useState<string>('light');
  return (
    <ThemeManager.Provider value={{ theme, setTheme }}>
      <Routes />
    </ThemeManager.Provider>
  );
}
