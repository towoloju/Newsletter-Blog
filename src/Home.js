
import BlogList from './Bloglist';
import useFetch from "./useFetch";

const Home = () => {
   const{data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');


   //output the data
    return ( 
        <div className="home">
          {error && <div>{error}</div>}
          {isLoading && <div> Loading....</div>}
          {blogs && <BlogList blogs={blogs} title= "All Blogs " />}
          

        </div>
     );
}
 
export default Home;