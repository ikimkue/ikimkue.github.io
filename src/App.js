// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('default');

  return (
    <div className={`app theme-${theme}`}>
      {theme === 'sakura' && (
        <video autoPlay muted loop id="background-video">
          <source src="sakura.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Example terminal */}
      <div className="terminal">
        <p>$ theme sakura</p>
        <button onClick={() => setTheme('sakura')}>Set Sakura Theme</button>
      </div>
    </div>
  );
}

export default App;