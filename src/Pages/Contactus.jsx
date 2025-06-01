import React, { useState } from 'react';
import { MdEmail, MdPerson, MdMessage } from 'react-icons/md';
import './Contactus.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <div className='contact-info'>
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <div className='contact-details'>
            <div className='contact-item'>
              <MdEmail />
              <span>info@senaselfoods.com</span>
            </div>
            <div className='contact-item'>
              <MdPerson />
              <span>+233 123 456 789</span>
            </div>
          </div>
        </div>

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='contact-label'>
              <MdPerson className='input-icon' />
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required 
              />
            </label>
          </div>

          <div className='form-group'>
            <label className='contact-label'>
              <MdEmail className='input-icon' />
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required 
              />
            </label>
          </div>

          <div className='form-group'>
            <label className='contact-label'>
              <MdMessage className='input-icon' />
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </label>
          </div>

          <button className="contact-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}