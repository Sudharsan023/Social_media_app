import { useParams , Link } from "react-router-dom";
import './index.css'

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => ((post.id).toString()) === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && 
        <>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}
        </p>
        <p className="postBody">{post.body}</p>
        <Link to={`/edit/${post.id}`}>
        <button className="editbutton">Edit</button>
        </Link>
        <br></br><br></br>
        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
          Delete
        </button><br></br><br></br>
        
        </>
}
{!post&& 
      <>
      <h2>Post Not Found</h2>

      <Link path="Home"></Link>
      </>

}
      </article>
    </main>
  )
}


export default PostPage