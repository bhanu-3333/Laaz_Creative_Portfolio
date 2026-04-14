import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './EnquirePage.css';
import logo from '../../assets/logo.png';
import callIcon from '../../assets/images/call.png';
import mailIcon from '../../assets/images/mail.png';


const EnquirePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    subject: 'Web Design',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phoneNo,
          subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNo: '',
          subject: 'Web Design',
          message: ''
        });
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Something went wrong' });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus({ submitting: false, success: false, error: 'Failed to connect to server' });
    }
  };

  return (
    <div className="enquire-page-wrapper">
      <Navbar />
      
      <main className="enquire-main">
        <div className="enquire-container">
          <div className="enquire-layout">
            {/* Left Side: Branding & Info */}
            <div className="enquire-branding">
              <div className="branding-content">
                <img src={logo} alt="Laaz Creative" className="enquire-logo" />
                <div className="contact-details">
                  <div className="contact-item">
                    <img src={callIcon} alt="Call" className="contact-icon" />
                    <span>91+ 914558999</span>
                  </div>
                  <div className="contact-item">
                    <img src={mailIcon} alt="Mail" className="contact-icon" />
                    <span>laazcreative@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="enquire-form-container">
              <form onSubmit={handleSubmit} className="enquire-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      placeholder="I" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phoneNo" 
                      placeholder="+91 012 3456 789" 
                      value={formData.phoneNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label className="section-label">Select Subject?</label>
                    <div className="subject-options">
                      {['Web Design', 'E-commerce', 'Mobile App', 'Student Project'].map(sub => (
                        <label key={sub} className="radio-label">
                          <input 
                            type="radio" 
                            name="subject" 
                            value={sub} 
                            checked={formData.subject === sub}
                            onChange={handleChange}
                          />
                          <span className="radio-custom"></span>
                          {sub}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Message</label>
                    <textarea 
                      name="message" 
                      placeholder="Write your message.." 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-footer">
                  {status.success && <p className="status-msg success">Message Sent Successfully</p>}
                  {status.error && <p className="status-msg error">{status.error}</p>}
                  <button 
                    type="submit" 
                    className="send-btn" 
                    disabled={status.submitting}
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnquirePage;
