import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React,{useContext} from "react";
import { ThemeMode } from "../App";

function Home(){
    const themeMode=useContext(ThemeMode)
    
    return(<div>
        <Header themeMode={themeMode}/>
        <Footer/>
    </div>);
}

export default Home