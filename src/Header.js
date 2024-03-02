import React from 'react'
import './index.css';
import Post from './post.jpg';


const Header = ({title}) => {
  return (
    <div className='header'>
         <h1>{title}</h1>
         <img className="headImg" src={Post} alt="PostGram"></img>
         
    </div>
   
  )
}

export default Header