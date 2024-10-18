import { Link } from "react-router-dom"

import { FaLocationDot, FaRegEnvelope } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa"
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest } from "react-icons/ti"
import { SlSocialInstagram } from "react-icons/sl"

import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="access-links">
            <div className="first-column">
                <div className="column">
                    <h3 className='title'>about us</h3>
                    <div className="content">
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        <div className="contact-link">
                            <FaLocationDot />
                            <Link>1734 Stonecoal Road</Link>
                        </div>
                        <div className="contact-link">
                            <FaPhone />
                            <Link>+021-95-51-84</Link>
                        </div>
                        <div className="contact-link">
                            <FaRegEnvelope />
                            <Link>email@email.com</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-column">
                <div className="column">
                    <h3 className='title'>categories</h3>
                    <div className="content">
                        <Link to='/products/phone'>Phone</Link>
                        <Link to='/products/laptop'>Laptops</Link>
                        <Link to='/products/tv'>TVs</Link>
                    </div>
                </div>
                <div className="column">
                    <h3 className='title'>information</h3>
                    <div className="content">
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="social-links">
            <div className="box">
                <TiSocialFacebook />
            </div>
            <div className="box">
                <TiSocialTwitter />
            </div>
            <div className="box">
                <SlSocialInstagram />
            </div>
            <div className="box">
                <TiSocialPinterest />
            </div>
        </div>
    </div>
  )
}

export default Footer