import React from "react";
import "./Contact.css";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import { faGithub, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact section" id="contact">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">Contact Me</h1>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">Do you have any inquiries?</h3>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                
              </div>
            
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                
              </div>
              
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                
              </div>
              
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15 fw-bold">I'M VERY RESPONSIVE TO MESSAGES</h4>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col- padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>&copy; Contact Me: <a href="/" className="ms-2"><span>Jomarie Endab</span></a></p>
            <div className="social-icons">
              <a href="https://github.com/jomarie009" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
              </a>
              <a href="https://www.facebook.com/carlo.labrozca" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
              </a>
              <a href="https://mail.google.com/mail/u/5/#inbox" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
