import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import './nav.css'
import { links } from '../../data'

const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState (false);
  
  return (
    <div>
      <nav>
        <div className='container nav_container'>
          <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
            <div className='badge'>
              <h1>MUHYIDDIIN</h1>
            </div>
          </Link>
          <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
            {
              links.map(
                ({name, path}, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev )} >{name}</NavLink>
                    </li>
                  )
                }
              )
            }
          </ul>
          <button className='nav_toggle-btn' onClick={() => setIsNavShowing (prev => !prev )}>
              {
                isNavShowing ? <FaTimes/>: <FaBars/> 
              }
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
