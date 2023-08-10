import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
function App() {
   const [darkMode, setDarkMode] = useState(false);
   return (
      <div className={`${darkMode ? 'dark' : 'light'} mode-container`}>
         <div style={{margin: "10px"}}>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
            <h1>How to Add Dark Mode in ReactJS using Tailwind CSS?</h1>
            <br/>
            <br/>
            <p>This is some text.</p>
            <br/>
            <p>This is some more text.</p>
         </div>
      </div>
   );
}
export default App;