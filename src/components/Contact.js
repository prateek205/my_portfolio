// components/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const contactInfo = [
    {
      id: 1,
      type: 'phone',
      label: 'Phone',
      value: '+91-9404557931',
      icon: '📱',
      color: '#8b5cf6',
      action: 'tel:+919404557931'
    },
    {
      id: 2,
      type: 'email',
      label: 'Email',
      value: 'prateekbahad@gmail.com',
      icon: '✉️',
      color: '#06b6d4',
      action: 'mailto:prateekbahad@gmail.com'
    },
    {
      id: 3,
      type: 'location',
      label: 'Location',
      value: 'Chhatrapati Sambhajinagar, MH – 431001',
      icon: '📍',
      color: '#10b981'
    },
    {
      id: 4,
      type: 'availability',
      label: 'Availability',
      value: 'Open for opportunities',
      icon: '✅',
      color: '#f59e0b'
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prateek-bahad-a1b985167',
      icon: '💼',
      color: '#0a66c2',
      username: '/prateek-bahad'
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/prateek205',
      icon: '💻',
      color: '#333',
      username: 'prateek205'
    },
    {
      id: 3,
      name: 'Email',
      url: 'mailto:prateekbahad@gmail.com',
      icon: '📧',
      color: '#ea4335',
      username: 'prateekbahad'
    },
    {
      id: 4,
      name: 'Portfolio',
      url: '#',
      icon: '🚀',
      color: '#6366f1',
      username: 'This Website'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-background">
        <div className="contact-particle particle-1"></div>
        <div className="contact-particle particle-2"></div>
        <div className="contact-particle particle-3"></div>
        <div className="contact-particle particle-4"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">
          <span className="title-connect">Let's Connect</span>
        </h2>
        <p className="section-subtitle">Ready to bring your ideas to life? Let's build something amazing together!</p>
        
        <div className="contact-container">
          <div className="contact-info-side">
            <div className="contact-intro">
              <div className="intro-avatar">
                <span className="avatar-icon">👨‍💻</span>
                <div className="avatar-status"></div>
              </div>
              <div className="intro-text">
                <h3 className="intro-title">Get in Touch</h3>
                <p className="intro-description">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>
            
            <div className="contact-details">
              <h4 className="details-title">Contact Information</h4>
              <div className="details-grid">
                {contactInfo.map(info => (
                  <div 
                    key={info.id} 
                    className="detail-card"
                    style={{ '--detail-color': info.color }}
                  >
                    <div className="detail-icon-wrapper">
                      <span className="detail-icon">{info.icon}</span>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label">{info.label}</div>
                      {info.action ? (
                        <a 
                          href={info.action} 
                          className="detail-value"
                          target={info.type === 'email' || info.type === 'phone' ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="detail-value">{info.value}</div>
                      )}
                    </div>
                    <div className="detail-decoration">
                      <div className="decoration-wave"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-social">
              <h4 className="social-title">Connect With Me</h4>
              <div className="social-grid">
                {socialLinks.map(social => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="social-card"
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-icon-wrapper">
                      <span className="social-icon">{social.icon}</span>
                      <div className="social-glow"></div>
                    </div>
                    <div className="social-info">
                      <div className="social-name">{social.name}</div>
                      <div className="social-username">{social.username}</div>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-side">
            <div className="form-container">
              <div className="form-header">
                <h3 className="form-title">Send me a message</h3>
                <p className="form-subtitle">I usually respond within 24 hours</p>
              </div>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">🎉</div>
                  <h4 className="success-title">Message Sent!</h4>
                  <p className="success-text">
                    Thank you for reaching out! I'll get back to you soon.
                  </p>
                  <button 
                    className="success-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label 
                      htmlFor="name" 
                      className={`form-label ${activeField === 'name' || formData.name ? 'active' : ''}`}
                    >
                      Your Name
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        className="form-input"
                        required
                      />
                      <div className="input-decoration">
                        <div className="input-line"></div>
                        <div className="input-focus"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label 
                      htmlFor="email" 
                      className={`form-label ${activeField === 'email' || formData.email ? 'active' : ''}`}
                    >
                      Email Address
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className="form-input"
                        required
                      />
                      <div className="input-decoration">
                        <div className="input-line"></div>
                        <div className="input-focus"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label 
                      htmlFor="subject" 
                      className={`form-label ${activeField === 'subject' || formData.subject ? 'active' : ''}`}
                    >
                      Subject
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField(null)}
                        className="form-input"
                        required
                      />
                      <div className="input-decoration">
                        <div className="input-line"></div>
                        <div className="input-focus"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label 
                      htmlFor="message" 
                      className={`form-label ${activeField === 'message' || formData.message ? 'active' : ''}`}
                    >
                      Your Message
                    </label>
                    <div className="input-wrapper">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        className="form-textarea"
                        rows="5"
                        required
                      />
                      <div className="input-decoration">
                        <div className="input-line"></div>
                        <div className="input-focus"></div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">🚀</span>
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <div className="form-note">
                    <span className="note-icon">💡</span>
                    <span>I'll respond to your message as soon as possible.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;