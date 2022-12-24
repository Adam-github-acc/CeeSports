import React, { useState } from 'react';
import Main from './components/Main/Main';
import Navbar from './components/bar/Navbar';
import SportsCards from './components/SportCards/SportCards';
import './App.css';
import { useEffect } from 'react';

const App: React.FC = () => {
  const [darkmode, setDarkmode] = useState(true);
  const [sport, setSport] = useState('');
  const root = document.getElementById('root') as HTMLElement;
  useEffect(() => {
    if (darkmode) {
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--primary-color', '#565656');
      root.style.setProperty('--secondary-color', '#383838');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-color-2', '#ffffff');
      root.style.setProperty('--border-color', '#848484');
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--primary-color', '#1087ff');
      root.style.setProperty('--secondary-color', '#03c04a');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--text-color-2', '#ffffff');
      root.style.setProperty('--border-color', '#848484');
    }
  }, [darkmode]);
  return (
    <div>
      {Boolean(sport) || <SportsCards setSport={setSport} />}
      {sport && (
        <Navbar
          darkmode={darkmode}
          setDarkmode={setDarkmode}
          setSport={setSport}
        />
      )}
      {sport && <Main sport={sport} />}
    </div>
  );
};

export default App;
