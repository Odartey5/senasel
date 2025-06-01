import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const ADDRESS = '123 Main St, Apapa, Labadi';
const EMAIL = 'info@example.com';
const PHONE = '555-555-5555';
const COMPANY = 'Senasel Foods';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="modern-footer">
      <div className="footer-marquee">
        <Marquee gradient={false} speed={50}>
          <div className="marquee-content">
            <span>TUESDAY - THURSDAY: 11AM-9PM</span>
            <span className="separator">●</span>
            <span>FRIDAY - SUNDAY: 12PM-11PM</span>
            <span className="separator">●</span>
=======
    <footer>
      {/* Marquee for opening hours - consider if it's always visible or if static text is also needed */}
      <Marquee gradient={false} speed={50} aria-label="Daily Opening Hours:">
        <span>TUESDAY - THURSDAY: 11AM-9PM</span>
        <span aria-hidden="true" style={{ margin: '0 1rem' }}>✸</span>
        <span>FRIDAY - SUNDAY: 12PM-11PM</span>
        <span aria-hidden="true" style={{ margin: '0 1rem' }}>✸</span>
        {/* You can repeat the content if you want a continuous scroll without gaps */}
        <span>TUESDAY - THURSDAY: 11AM-9PM</span>
        <span aria-hidden="true" style={{ margin: '0 1rem' }}>✸</span>
        <span>FRIDAY - SUNDAY: 12PM-11PM</span>
        <span aria-hidden="true" style={{ margin: '0 1rem' }}>✸</span>
      </Marquee>

      <div className="footer-container">
        {/* Location Section */}
        <section className="footer-section" aria-label="Our Location">
          <h4>Location</h4>
          <address>
            {ADDRESS.split(', ').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < ADDRESS.split(', ').length - 1 && <br />} {/* Add line breaks */}
              </React.Fragment>
            ))}
          </address>
          {/* Optional: Add a link to Google Maps */}
          <p><a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer">View on Map</a></p>
        </section>

        {/* Sitemap / Navigation Section - More comprehensive */}
        <nav className="footer-section" aria-label="Site Navigation">
          <h4>Sitemap</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li> {/* Consistent kebab-case */}
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/online-ordering">Order Online</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li> {/* Consistent kebab-case */}
          </ul>
        </nav>

        {/* Contact Us Section */}
        <section className="footer-section" aria-label="Get in Touch">
          <h4>Contact Us</h4>
          <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p>Phone: <a href={`tel:${PHONE}`}>{PHONE}</a></p>
          {/* Consider adding business hours statically here for better accessibility */}
          {/* <p>Business Hours:</p>
          <ul>
            <li>Tue - Thu: 11AM - 9PM</li>
            <li>Fri - Sun: 12PM - 11PM</li>
          </ul> */}
        </section>

        {/* Social Media Section - Crucial for food businesses */}
        <section className="footer-section" aria-label="Follow Us on Social Media">
          <h4>Follow Us</h4>
          <div className="social-links">
            {/* Replace these with actual SVG icons or icon library components */}
            <a href="https://facebook.com/senaselfoods" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Facebook">
              {/* <i className="fab fa-facebook-f"></i> example if using Font Awesome */}
              <img src="/path/to/facebook.png" alt="Facebook" className="social-icon" />
            </a> 
            <a href="https://instagram.com/senaselfoods" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram">
              {/* <i className="fab fa-instagram"></i> */}
              <img src="./path/to/" alt="Instagram" className="social-icon" />
            </a>
            {/* Add more social media links as needed */}
>>>>>>> 0de4714d9de5c889b5d713203f826490ff7c3e24
          </div>
        </Marquee>
      </div>

      <div className="footer-content">
        <div className="footer-section brand-section">
          <h3>{COMPANY}</h3>
          <p className="brand-description">
            Delivering exceptional dining experiences with authentic flavors and warm hospitality.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reservations</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <p>{ADDRESS}</p>
          </div>
          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="contact-item">
            <MdPhone className="contact-icon" />
            <a href={`tel:${PHONE}`}>{PHONE}</a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to receive special offers and updates.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Email for newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {COMPANY}. All Rights Reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="separator">|</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;