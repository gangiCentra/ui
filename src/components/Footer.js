import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
export function Footer(props) {
    return (
        <div class="footer-div">
            <div class="footer-page-links">
                <Link class="footer-link" to={`/`}>
                    <div class="footer-link-div">
                        <h4>Home</h4>
                    </div>
                </Link>
                <Link class="footer-link" to={`/services`}>
                    <div class="footer-link-div">
                        <h4>Services</h4>
                    </div>
                </Link>
                <Link class="footer-link" to={`/about`}>
                    <div class="footer-link-div">
                        <h4>About Us</h4>
                    </div>
                </Link>
                <Link class="footer-link" to={`/contact`}>
                    <div class="footer-link-div">
                        <h4>Contact Us</h4>
                    </div>
                </Link>
            </div>
            <div class="social-container">
                <a href="https://www.facebook.com//profile.php?id=100089627808137" class="social" id="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/centramarketing" class="social" id="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                 <a href="https://www.linkedin.com" class="social" id="linkdin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.twitter.com/centramrktingco" class="social" id="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>            
        </div>
    );
}