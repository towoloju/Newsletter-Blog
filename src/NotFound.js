import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops...</h2>
            <p> The page you're looking for cannot be found</p>
            <Link to= '/'>Back to home...</Link>
        </div>
     );
}
 
export default NotFound;