

export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}