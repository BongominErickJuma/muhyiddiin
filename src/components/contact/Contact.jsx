import Header from '../Header'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import col from '../col.png'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={col}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde dolor accusantium ea! 
    </Header>
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-wrapper">
          <a href="mailto:support@institute.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+256775783500" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div> 
      </div>
    </section>
    </>
  )
}

export default Contact
