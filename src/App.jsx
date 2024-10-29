// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import LoadingScreen from './pages/LoadingScreen';
import Policy from "./pages/Policy";
import Cookies from "./components/Cookies/Cookies";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import ReactGA from "react-ga";

const TRACKING_ID = "dddd";
export const ThemeMode = createContext();

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    // Recupera do localStorage; se não houver, define como false (dark mode)
    return JSON.parse(localStorage.getItem("themeMode")) || false;
  });

  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  useEffect(() => {
    if (cookies.cookieConsent) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.pageview(window.location.pathname);
    }
  }, [cookies.cookieConsent]);

  useEffect(() => {
    document.body.classList.toggle('light-mode', themeMode);
    document.body.classList.toggle('dark-mode', !themeMode);

    // Salva o modo no localStorage
    localStorage.setItem("themeMode", JSON.stringify(themeMode));
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
      const validPaths = ['/', '/terms-conditions'];

      if (!validPaths.includes(path)) {
        rootElement.classList.add('no-page');
        document.body.classList.remove('light-mode', 'dark-mode');
      } else {
        rootElement.classList.remove('no-page');
        document.body.classList.toggle('light-mode', themeMode);
        document.body.classList.toggle('dark-mode', !themeMode);
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
                <Route path="/terms-conditions" element={<RouteWrapper element={<Policy />}/>} />
                <Route path="*" element={<RouteWrapper element={<NoPage />} />} />
              </Routes>
              {!cookies.cookieConsent && <Cookies setCookie={setCookie} />}
            </div>
          </BrowserRouter>
        </ThemeMode.Provider>
      }
      <ScrollToTopButton/>
    </>
  );
}

export default App;
