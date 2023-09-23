import React from 'react'
import './programs.css'
import {programs} from '../../data'
import { FaBook } from 'react-icons/fa'
import SectionHead from './SectionHead'
import Cards from '../../UI/Cards'
import { Link } from 'react-router-dom'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="programs-container">
        <SectionHead icon={<FaBook/>} title="Programs" />
      <div className="programs-wrapper">
        {
          programs.map(({id, icon, title, info, path}) => {
            return (
              <Cards className="programs-program" key={id}>
                 <span>{icon}</span>
                 <h4>{title}</h4>
                 <small>{info}</small>
                 <Link to={path} className='btn sm'>View details</Link>
              </Cards>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Programs
