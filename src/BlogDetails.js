import {useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} =useParams(); //Allows us to grab the 'id' parameters of each blog from the routes
    const {data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    //Deleting Blogs
    const handleDeleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        });
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author} </p>
                    <br/>
                    <p>{blog.body}</p>
                    <button onClick={handleDeleteBlog}>Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;