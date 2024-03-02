import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle,
    setEditTitle
}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post,  setEditTitle, setEditBody])

    return (
        <main className="EditPost">
            {editTitle && 
            <> 
            <h2>Edit Post</h2>
            <br></br>
            <form className="newPostForm" onSubmit={(e) => 
                e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label><br></br>
                    <input 
                        id="postTitle"
                        type="text"
                        required 
                        value={editTitle}
                        onChange={(e) => 
                        setEditTitle(e.target.value)} 
                        />
                        <br></br>
                        <label htmlFor="postBody">Post:</label>
                        <br></br>
                        <textarea 
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)} /><br></br>
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
               </form>
            </>
        }
               {!editTitle && 
            <>
              <h2>Post Not Found...</h2>
            </>
            }

    </main>
    )
}
export default EditPost