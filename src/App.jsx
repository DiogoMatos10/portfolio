import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import LoadingScreen from './pages/LoadingScreen';
import Policy from "./pages/Policy"
import Cookies from "./components/Cookies/Cookies";

export const ThemeMode = createContext();

function App() {
  const [themeMode, setThemeMode] = useState(false); // false is dark mode, true is light
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

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
      const validPaths = ['/', '/home', '/about', '/experience', '/contact','/policy'];

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
              <div className="app">
                <Routes>
                  <Route index element={<RouteWrapper element={<Home />} />} />
                  <Route path="/home" element={<RouteWrapper element={<Home />} />} />
                  <Route path="/about" element={<RouteWrapper element={<About />} />} />
                  <Route path="/experience" element={<RouteWrapper element={<Experience />} />} />
                  <Route path="/contact" element={<RouteWrapper element={<Contact />} />} />
                  <Route path="/policy" element={<RouteWrapper element={<Policy />}/>} />
                  <Route path="*" element={<RouteWrapper element={<NoPage />} />} />
                </Routes>
                {!cookies.cookieConsent && <Cookies setCookie={setCookie} />}
              </div>
          </BrowserRouter>
        </ThemeMode.Provider>
      }
    </>
  );
}

export default App;
