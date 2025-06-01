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
    <footer className="modern-footer">
      <div className="footer-marquee">
        <Marquee gradient={false} speed={50}>
          <div className="marquee-content">
            <span>TUESDAY - THURSDAY: 11AM-9PM</span>
            <span className="separator">●</span>
            <span>FRIDAY - SUNDAY: 12PM-11PM</span>
            <span className="separator">●</span>
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