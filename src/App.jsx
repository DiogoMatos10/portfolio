import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import LoadingScreen from './pages/LoadingScreen';

// context to manage the theme mode
export const ThemeMode = createContext();

function App() {
  const [themeMode, setThemeMode] = useState(false); // false is dark and true is light
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (themeMode) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [themeMode]);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      setLoading(false);
    };

    loadData();
  }, []);

  function RouteWrapper({ element }) {
    const location = useLocation();

    useEffect(() => {
      const rootElement = document.getElementById('root');
      const path = location.pathname;
      const validPaths = ['/', '/home', '/about', '/experience', '/contact'];

      if (!validPaths.includes(path)) {
        rootElement.classList.add('no-page');
        document.body.classList.remove('light-mode', 'dark-mode');
      } else {
        rootElement.classList.remove('no-page');
        if (themeMode) {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
        } else {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
        }
      }
    }, [location, themeMode]);

    return element;
  }

  return (
    <>
      {loading ? <LoadingScreen /> :
        <ThemeMode.Provider value={{ themeMode, setThemeMode }}>
          <BrowserRouter>
              <Routes>
                <Route index element={<RouteWrapper element={<Home />} />} />
                <Route path="/home" element={<RouteWrapper element={<Home />} />} />
                <Route path="/about" element={<RouteWrapper element={<About />} />} />
                <Route path="/experience" element={<RouteWrapper element={<Experience />} />} />
                <Route path="/contact" element={<RouteWrapper element={<Contact />} />} />
                <Route path="*" element={<RouteWrapper element={<NoPage />} />} />
              </Routes>
          </BrowserRouter>
        </ThemeMode.Provider>
      }
    </>
  );
}

export default App;
