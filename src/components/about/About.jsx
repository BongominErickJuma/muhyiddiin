import React from 'react'
import './about.css'
import Header from '../Header'
import col from '../col.png'
import Image from '../about/voc.png'
import Vis from '../about/img.png'
import Mission from '../about/Mission.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us" image={col}>
    Muhyiddiin Institute is a leading vocational institution...
    </Header>

    <section className='about-story'>
      <div className='container about-story-container'>
        <div className="about-section-image">
          <img src={Image} alt='about section img'/>
        </div>
        <div className="about-section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est labore eveniet impedit deserunt! Numquam vero tempora ipsum magni? Corporis ducimus dolorum alias. Magni error maxime ratione! Excepturi, perferendis. Aut.</p>
        </div>
      </div>
    </section>

    <section className='about-vision'>
      <div className='container about-vision-container'>
        <div className="about-section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est labore eveniet impedit deserunt! Numquam vero tempora ipsum magni? Corporis ducimus dolorum alias.</p>
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti ab voluptatibus ullam fugiat illum ipsa reiciendis voluptas, nostrum vel.</p>
        </div>
        <div className="about-section-image">
          <img src={Vis} alt='vision section img'/>
        </div>
      </div>
    </section>

    <section className='about-story'>
      <div className='container about-mission-container'>
        <div className="about-section-image">
          <img src={Mission} alt='mission section img'/>
        </div>
        <div className="about-section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est labore eveniet impedit deserunt! Numquam vero tempora ipsum magni? Corporis ducimus dolorum alias. Magni error maxime ratione! Excepturi, perferendis. Aut.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, voluptate! Laudantium voluptate omnis praesentium debitis corporis rerum nemo tempore dolor.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About