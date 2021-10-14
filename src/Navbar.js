//React handles requests only in the browser use import links after installing react router
import { Link } from 'react-router-dom';
 
 
 const Navbar = () => {
     return ( 
         <nav className="navbar">
             <h1>The Dojo Blog</h1>
             <div className="links">
                 {/*Changed a href - link to beacuse we've imported LINK from react router 
                 You should notice that its now quicker*/}
                 <Link to="/">Home</Link>
                 <Link to="/createblog" style={{
                     color: "#fff",
                     backgroundColor: "#d1055a",
                     borderRadius: "10px"
                 }}>New Blog</Link>
             </div>
         </nav>
      );
 }
  
 export default Navbar;