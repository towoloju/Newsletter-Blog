import { useState } from "react";
import { useHistory } from "react-router";

const Createblog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setisLoading(true);

        //Submitting data
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"}, //Sending JSON data
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New ")
            setisLoading(false);
           // history.go(-1); //go back 1 page (-1)
            history.push('/'); //go to home back
        })

        
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text"  required value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <label> Blog Content</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>

                <label> Blog Aurthor</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Yomi">Yomi</option>
                    <option value="Towo">Towo</option>
                    <option value="Odunayo">Odunayo</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}


               

            </form>
        </div>
     );
}
 
export default Createblog;