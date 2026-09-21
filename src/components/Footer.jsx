import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import brandIcon from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
      <footer className="footer">
        <div className="brand-logo">
          <img src={brandIcon} alt="Brand Icon" className="brand-icon" />
        </div>
  
        <nav className="footer-menu">

          <div className="footer-menu-column">
            <h3>Product</h3>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
          </div>

          <div className="footer-menu-column">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Learning Guides</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer-menu-column">
            <h3>Community</h3>
            <a href="#">Discord</a>
            <a href="#">Forum</a>
            <a href="#">Events</a>
          </div>

          <div className="footer-menu-column">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>

        </nav>

        <div className="footer-social-media">
          <div className="social-icons">
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
