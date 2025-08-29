import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <ul className="contact-info">
        <li>Email: <a href="mailto">mrunalkhedekar539@example.com</a></li>
        <li>Phone: <a href="tel">89756818440</a></li>
      </ul>

      <h2>send me a message:</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
