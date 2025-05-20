import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './Footer.css';

const ADDRESS = '123 Main St, Anytown, USA';
const EMAIL = 'info@example.com';
const PHONE = '555-555-5555';
const COMPANY = 'Your Company Name';

const Footer = () => {
  return (
    <footer>
      <Marquee gradient={false} speed={50} aria-label="Opening hours marquee">
        <span>TUESDAY - THURSDAY: 11AM-9PM</span>
        <span aria-hidden="true" style={{ margin: '0 1rem' }}>✸</span>
        <span>FRIDAY - SUNDAY: 12PM-11PM</span>
        <span aria-hidden="true" style={{ margin: '0 1rem' }}>✸</span>
      </Marquee>
      <div className="footer-container">
        <section className="footer-section" aria-label="Location">
          <h4>Location</h4>
          <address>{ADDRESS}</address>
        </section>
        <nav className="footer-section" aria-label="Sitemap">
          <h4>Sitemap</h4>
         {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul> */}
        </nav>
        <section className="footer-section" aria-label="Contact Us">
          <h4>Contact Us</h4>
          <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p>Phone: <a href={`tel:${PHONE}`}>{PHONE}</a></p>
        </section>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} {COMPANY}</p>
      </div>
    </footer>
  );
};

export default Footer;

