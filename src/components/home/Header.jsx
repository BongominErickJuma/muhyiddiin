import React from 'react'
import './home.css'
import Badge from '../home/school.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='main_header'>
        <div className='container main_header-container'>
            <div className='main_header-left'>
                <h4>Welcome to</h4>
                <h3>MUHYIDDIIN Quran Memorisation and Vocational Institute</h3>
                <p>
                Empowering Minds, Creating Leaders and changing the Society
                </p>
                <Link  to="/programs" className='btn lg'>View More</Link>
            </div>
            <div className='main_header-right'>
              <div className='header_img'>
                <img className='schoolbadge' src={Badge} alt='School badge'/>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header
