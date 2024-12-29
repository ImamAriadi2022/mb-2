import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message || !phone) {
      alert('Please fill in all fields!');
      return;
    }

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      `Hello, my name is ${name}. ${message}`
    )}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="phone">WhatsApp Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g., 6281234567890"
            required
          />
        </div>
        <button type="submit">Send via WhatsApp</button>
      </form>
    </div>
  );
}

export default ContactForm;
