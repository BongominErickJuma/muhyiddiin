import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to="/" className="logo">
                    <h1><span className='foot'>MUHYIDDIIN</span></h1>
                </Link>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
                <div className="footer-socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopenner'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopenner'><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopenner'><FaTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopenner'><FaInstagram/></a>
                </div>
            </article>
            <article>
                <h1>Permalinks</h1>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/programs">Courses</Link>
                <Link to="/admissions">Admissions</Link>
            </article>
            <article>
                <h1>Location Address</h1>
                <Link to="/s">Street</Link>
                <Link to="/s">Plot No</Link>
                <Link to="/s">Postal Code</Link>
            </article>
            <article>
                <h1>Connect with Us</h1>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer-copyright">
            <small>2023 MUHYIDDIIN INSTITUTE &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
