import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const Nav = ({search, setSearch}) => {
  return (
     <nav className='Nav'>
        <form className='searchForm' >
          <input 
              id = "search"
              type="text"
              placeholder="search post"
              value={search}
              onChange={(e) => setSearch(e.target.value)}>
          </input>
        </form>
        <ul>
          <li><Link to="Home" className='lin'>Home</Link></li>
          <li><Link to="post" className='lin'>Post</Link></li>
          <li><Link to="about" className='lin'>About</Link></li>
        </ul>
     </nav>
  )
}

export default Nav