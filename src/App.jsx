// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Loading from './components/Loading/Loading';
import Policy from "./pages/Policy";
import Cookies from "./components/Cookies/Cookies";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import ReactGA from "react-ga";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const TRACKING_ID = "dddd";
export const ThemeMode = createContext();

const EXPIRATION_TIME = 60000;

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return JSON.parse(localStorage.getItem("themeMode")) || false;
  });

  const [loading, setLoading] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("hasVisited"));
    const now = Date.now();

    if (storedData && now - storedData.timestamp < EXPIRATION_TIME) {
      return false; 
    } else {
      return true; 
    }
  });

  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [moveScrollButton, setMoveScrollButton] = useState(false); 

  useEffect(() => {
    if (cookies.cookieConsent) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.pageview(window.location.pathname);

      setMoveScrollButton(true); 
    }
  }, [cookies.cookieConsent]);

  useEffect(() => {
    document.body.classList.toggle('light-mode', themeMode);
    document.body.classList.toggle('dark-mode', !themeMode);

    localStorage.setItem("themeMode", JSON.stringify(themeMode));
  }, [themeMode]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", JSON.stringify({ timestamp: Date.now() }));
      }, 3300); 
    }
  }, [loading]);

  const handleCookieConsent = (ctrl) => {
    setMoveScrollButton(true);  
  };
  

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

  const isNoPage = (location.pathname !== '/' && location.pathname !== '/terms-conditions');


  if (loading && !isNoPage) {
    return <Loading />;
  }
  
  return (
    <>
      <ThemeMode.Provider value={{ themeMode, setThemeMode }}>
        <BrowserRouter>
          <div className="app">
            {!isNoPage && <Header />}
            <Routes>
              <Route index element={<RouteWrapper element={<Home />} />} />
              <Route path="/home" element={<RouteWrapper element={<Home />} />} />
              <Route path="/about" element={<RouteWrapper element={<About />} />} />
              <Route path="/experience" element={<RouteWrapper element={<Experience />} />} />
              <Route path="/contact" element={<RouteWrapper element={<Contact />} />} />
              <Route path="/terms-conditions" element={<RouteWrapper element={<Policy />} />} />
              <Route path="*" element={<RouteWrapper element={<NoPage />} />} />
            </Routes>
            {!isNoPage && <Footer />}
            {!isNoPage && !cookies.cookieConsent && <Cookies setCookie={setCookie} onConsent={handleCookieConsent} />}
          </div>
        </BrowserRouter>
      </ThemeMode.Provider>

      <ScrollToTopButton moveScrollButton={moveScrollButton} />
    </>
  );
}

export default App;
