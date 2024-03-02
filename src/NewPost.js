import React from 'react'

const NewPost = ({handleSubmit, postBody, postTitle, setPostTitle, setPostBody}) => {
  return (
    <main className='newPost'>
      <h2>NewPost</h2><br></br>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label><br></br>
        <input
           id="postTitle"
           type="text"
           required
           value={postTitle}
           placeholder='Enter title'
           onChange={(e) => setPostTitle(e.target.value)}
          /><br></br>
          <label htmlFor='postBody'>Post:</label><br></br>
          <textarea
           id="postBody"
           required
           value={postBody}
           placeholder='post here...'
           onChange={(e) => setPostBody(e.target.value)}
           /><br></br>
           <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost