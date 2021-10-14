
import Navbar from './Navbar';
import Home from './Home'; 
//Importing React router packages
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Createblog from './Createblog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
 
  //const person = {name: 'towo', age :30}; cant output objects and booleans

  return (
    <Router>
    <div className="App">
      <Navbar />
       <div className="content">
         <Switch>
           {/* Only match if its the excact url '/' */}
            <Route exact path="/"> 
              <Home/>
            </Route>

            <Route path="/createblog">
              <Createblog/>
            </Route>

            <Route path="/blogs/:id"> {/*Blog id */}
              <BlogDetails/>
            </Route>

            <Route path="*"> {/* '*' would catch any other route that isn't included in the web file */}
              <NotFound/>
            </Route>

         </Switch>
       </div>
    </div>
    </Router>
   
  );
}

export default App;
