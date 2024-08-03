import "./NoPageComp.css"
import { Link } from "react-router-dom";

function NoPageComp(){
    return(<div className="container-404">
        <div className="info-error">
           {/*  <p>404</p> */}
            <h1>Page not Found</h1>
            <p>Sorry, we couldn't find the page you're looking for.</p>
            <Link to="/home" className="back-link">Back{/*  to Home */}</Link>
        </div>
    </div>);
}

export default NoPageComp