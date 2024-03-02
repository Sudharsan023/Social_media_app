import React from 'react'
import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <h1 style={{ marginTop: "2rem" }}>
          Sorry, Post NoT FounD
        </h1>
      )}
        
    </main>
  )
}

export default Home