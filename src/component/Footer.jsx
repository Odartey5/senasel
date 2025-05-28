import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './Footer.css'; // Assuming your CSS file is correctly linked
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

// It's good practice to define constants for reusability and clarity
const ADDRESS = '123 Main St, Apapa, Labadi';
const EMAIL = 'info@example.com';
const PHONE = '555-555-5555';
const COMPANY = 'Senasel Foods';

const Footer = () => {
  return (
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
              <img src="/path/to/facebook-icon.svg" alt="Facebook" className="social-icon" />
            </a> 
            <a href="https://instagram.com/senaselfoods" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram">
              {/* <i className="fab fa-instagram"></i> */}
              <img src="/path/to/instagram-icon.svg" alt="Instagram" className="social-icon" />
            </a>
            {/* Add more social media links as needed */}
          </div>
          {/* Optional: Newsletter Signup */}
          <div className="newsletter-signup">
            <h5>Join Our Newsletter</h5>
            <p>Stay updated with our latest dishes & offers!</p>
            {/* This would typically be a form */}
            { <form>
              <input type="email" placeholder="Your email" aria-label="Enter your email for newsletter" />
              <button type="submit">Subscribe</button>
            </form> }
          </div>
        </section>

        {/* Legal Links Section - Important for any business */}
        <section className="footer-section" aria-label="Legal Information">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            {/* Add other relevant legal links like "Refund Policy" for e-commerce */}
          </ul>
        </section>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} {COMPANY}. All Rights Reserved.</p>
        {/* You could add a small design credit here if applicable */}
        {/* <p>Designed by [Your Name/Company]</p> */}
      </div>
    </footer>
  );
};

export default Footer;

