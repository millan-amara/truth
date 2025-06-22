import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import Navbar from '../components/Navbar';

function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
      email: '',
      message: '',
    });

    const {email,message} = formData;

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    
    const onSubmit = (e) => {
      e.preventDefault()
      emailjs.sendForm('service_pm4kpg1', 'template_qdgkji2', form.current, {
        publicKey: 'FfC2jgC2scsnjnV9p'
      })
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });

      
    }
  
    return (
      <>
      <Navbar />
      <section id="contact">
      <div className="contact">
        <h2>Get in Touch</h2>
        <p>Have any questions about Our Services?</p>
        <form ref={formRef} onSubmit={onSubmit} id="contact-form" className="contact-form px-3">
          <div className="mb-7">
              <label htmlFor="email" className="mb-3">Email:</label>
              <input type="email" id="email" name="email" placeholder='one@gmail.com' value={email} onChange={handleChange} required className="focus:outline-none focus:ring-2 appearance-none text-sm" />
          </div>

          <div className="mb-5">
              <label htmlFor="message" className="mb-3">Message:</label>
              <textarea id="message" name="message" value={message} placeholder='Your Message' onChange={handleChange} rows="4" required className="focus:outline-none focus:ring-2 appearance-none text-sm"></textarea>
          </div>
          <div>
              <button id="contact-button" type="submit" className="flex bg-red-700 hover:bg-red-800 text-white w-full py-2 rounded-md items-center justify-center">Send Message</button>
          </div>
          
        </form>
      </div>
      </section>
      </>
    );
}

export default Contact