import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px"
  };

  return (
    <div style={themeStyle}>
      <h1>Theme Toggle SPA</h1>
      <p>Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
