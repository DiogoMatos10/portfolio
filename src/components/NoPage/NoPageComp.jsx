import "./NoPageComp.css"
import { Link } from "react-router-dom";

function NoPageComp(){
    return(
    <div className="container-404">
        <div className="info-error">
            <abbr title="Return to Home Page">
                <Link to="/"><img className="logo-picture" src="/images/dm@2.png" alt="Diogo's Logo" /></Link>
            </abbr>
            <h1>Page not Found</h1>
            <p>Sorry, we couldn't find the page you're looking for.</p>
        </div>
    </div>);
}

export default NoPageComp