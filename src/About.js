import React from 'react'
import Post from './post.jpg'



const About = () => {
  return (
    <main className="About">
        <h2>About</h2><br></br>
        <img src={Post}></img> 
        <p style={{marginTop: "1rem"}}>Hii POSTGRAM Users, I am Sudharsan M, Front-end Developer. I have developed this application using React Js.</p>
    </main>
  )
}

export default About