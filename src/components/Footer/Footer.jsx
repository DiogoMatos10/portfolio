import { ThemeMode } from "../../App";
import React, { useState,useEffect,useContext } from "react";
import "./Footer.css";


function Footer(){
    const { themeMode, setThemeMode } = useContext(ThemeMode);


    return(
        <div className={`footer ${themeMode? 'light-mode' : 'dark-mode'}`}>


        </div>
    );
}

export default Footer