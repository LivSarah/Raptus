import React from 'react'
import './Styles/Contact.scss'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className="Contact">
        <span className="title">Kontakt Oss</span>
        <div className="contact-wrapper">
            <div className="info">
                <p>
                Festivalen arrangeres i Bergen sentrum.<br/>
                Vi kommer tilbake med lokale senere.<br/><br/>
                Du finner oss på både Facebook og Instagram.
                </p>
                <div className="social-media">
                  <a href="https://www.facebook.com/Raptuscomics/"><img src={require('../Assets/Images/facebook-icon.webp')} alt="facebook-logo"/></a>
                  <a href="https://www.instagram.com/raptusfestivalen/"><img src={require('../Assets/Images/instagram-icon.webp')} alt="instagram-logo"/></a>
                </div>
            </div>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Contact