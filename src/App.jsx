import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export const ThemeMode = createContext();

function App() {
  const [themeMode, setThemeMode] = useState(false); //false is dark and true is ligh

  useEffect(() => {
    if (themeMode) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [themeMode]);

  return (
    <ThemeMode.Provider value={{ themeMode, setThemeMode }}>
      <div className={themeMode ? 'light-mode' : 'dark-mode'}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeMode.Provider>
  );
}

export default App;
