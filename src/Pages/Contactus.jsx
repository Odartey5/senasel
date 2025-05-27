import './Contactus.css';



export default function Contact() {
  return (
    <div className='contact-container'>
      <h2 className='contact-header'>Contact Us</h2>
      <form className='contact-form'>
        <label className='contact-label'>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label className='contact-label'>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label className='contact-label'>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button className="contact-button" type="submit">Send</button>
      </form>
    </div>
  );
}   