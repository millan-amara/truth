import React, { useState, useRef } from 'react';
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Journey from "../components/Journey";
import VideoGallery from "../components/VideoGallery";
import emailjs from "@emailjs/browser";


export default function HomePage() {

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
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />


      {/* About Section */}
      <Journey />
      <section className="py-20 px-6 text-center">
        <p className="text-lg">
          "I help brands and creators stand out with scroll-stopping video edits that drive engagement and views. With millions of views under my belt, I turn simple clips into high-performing content."
        </p>
      </section>


      {/* Portfolio Section */}
      <VideoGallery />



      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "TikTok/Reels Editing",
              desc: "You shoot, I edit. Get polished, viral-ready videos fast.",
            },
            {
              title: "Full Video Creation",
              desc: "From shoot to final cut—done-for-you content creation.",
            },
            {
              title: "UGC for Brands",
              desc: "Authentic product content created with marketing in mind.",
            },
          ].map((service, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
 
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-6">
          Ready to create something amazing? Reach out for quotes or collabs.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
            <Mail size={18} /> films@aiamtruth.com
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
            <Phone size={18} /> +254 700 487 751
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
            <Send size={18} /> DM on TikTok
          </button>
        </div>
      </section>
      <section id="contact" className='bg-gray-900'>
        <div className="contact">
          
          <p>Have any questions?</p>
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
                <button id="contact-button" type="submit" className="flex bg-fuchsia-700 hover:bg-fuchsia-800 text-white w-full py-2 rounded-md items-center justify-center">Send Message</button>
            </div>
            
          </form>
        </div>
      </section>


    </div>
  );
}
