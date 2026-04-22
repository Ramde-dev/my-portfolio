import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key from environment variable
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 's4IVVB-tXDBeaihnf');

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handlePhoneClick = () => {
    window.location.href = 'tel:+255785898551';
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Dar+es+Salaam+Tanzania', '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return;
    }

    if (formData.message.length < 10) {
      setErrorMessage('Message must be at least 10 characters long');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_k5gy5h3',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_k9dpwg9',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ramdedev0@gmail.com',
          reply_to: formData.email,
        }
      );
      
      if (result.status === 200) {
        setShowThankYou(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Auto hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage(error.text || 'Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126919.2962409704!2d39.2083284!3d-6.792354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b2d2d5b5b5b%3A0x2b5b5b5b5b5b5b5b!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s";

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact With Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>I'm currently available for freelance work and full-time positions.</p>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:ramdedev0@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>ramdedev0@gmail.com</p>
                </a>
              </div>
            </div>
            
            <div className="info-item" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
              <FaPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+255785898551</p>
              </div>
            </div>
            
            <div className="info-item" onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Dar es salaam, Tanzania</p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="Google Map Location"
                src={googleMapsEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '10px', marginTop: '1.5rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {showThankYou ? (
              <div className="thank-you-message">
                <FaCheckCircle className="thank-you-icon" />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully.</p>
                <p className="thank-you-subtext">I'll get back to you within 24 hours.</p>
                <button onClick={() => setShowThankYou(false)} className="back-home-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="error-message">
                    {errorMessage}
                  </div>
                )}
                
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message (minimum 10 characters)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <FaSpinner className="spinner-icon" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;