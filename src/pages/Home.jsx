import Header from "../components/Header/Header";
import React,{useContext} from "react";
import { ThemeMode } from "../App";

function Home(){
    const themeMode=useContext(ThemeMode)
    
    return(<div>
        <Header themeMode={themeMode}/>
    </div>);
}

export default Home