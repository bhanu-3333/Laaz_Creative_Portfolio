import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Column - Logo */}
          <div className="footer-brand">
            <img src={logo} alt="Laaz Creative" className="footer-logo-img" />
          </div>

          {/* Middle Column - Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home">Home <span>↗</span></a>
              </li>
              <li>
                <a href="#services">Services <span>↗</span></a>
              </li>
              <li>
                <a href="#portfolio">Portfolio <span>↗</span></a>
              </li>
              <li>
                <a href="#enquire">Enquire Now <span>↗</span></a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-details">
              <a href="mailto:laazcreative@gmail.com" className="contact-link">laazcreative@gmail.com</a>
              <p className="contact-item">91+ 914558999</p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="footer-bottom">
          <p>©2025 Laazcreative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
