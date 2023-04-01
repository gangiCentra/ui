import '../styles/Mobile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";
import centra from "../images/centra-C-no-background.png";
import React, { useState, useRef, useEffect } from "react";
import { ContactForm } from "../components/ContactForm.js";

export function Mobile (props){
    const [active, setActive] = useState(false);

      const contentRef = useRef(null);

      useEffect(() => {
        contentRef.current.style.maxHeight = active
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
      }, [contentRef, active]);

      const toggleAccordion = () => {
        setActive(!active);
      };
    return (
        <div class="mobile-container">
            <div class="mobile-logo-bar">
                <img id="mobile-logo" src={centra} alt="logo" />
            </div>
            <div class="mobile-content">
                <div class="mobile-top-container">
                    <img src={centra}/>
                    <div class="mobile-home-page-big-text">
                        <h1 class="mobile-home-page-header">We are <mark>Centra</mark> </h1>
                    </div>
                    <div class="mobile-big-text-caption">
                        <span>We are not your usual digital marketing agency. And We refuse to settle for the bare minmum.</span>
                    </div>
                    <FontAwesomeIcon icon="fa-thin fa-arrow-down" />
                </div>
                <div class="mobile-see-more">
                    <h2>Here are just a few of the ways we can help</h2>
                    <ul>
                        <li>Content marketing strategy planning and execution</li>
                        <li>Custom marketing plan for increased visibility, search rankings and real organic traffic</li>
                        <li>Ongoing content marketing campaign tracking and monitoring</li>
                        <li>marketing research and analysis of your competitors</li>
                        <li>ROI measurements and constant optimization</li>
                    </ul>
                    <div class="visit-desktop">
                        <span>Want to see more?! </span> <br/>
                        <span>Visit our page on desktop!</span>
                    </div>
                </div>
                
                <div class="mobile-faq">
                    <h2>You Have <mark class="white">Questions?</mark> We Have <mark class="white">Answers</mark></h2>
                    <button class="mobile-accordion" onClick={toggleAccordion}>Will you take a look at my account before I get started?</button>
                    <div class="panel">
                        {/* <fa-plus
                            className={active ? `question-icon rotate` : `question-icon`}
                            /> */}
                            <i class="fa fa-plus" aria-hidden="true" ></i>
                            <div ref={contentRef} classname={active ? `answer answer-divider` : `answer`}>
                                <p>Yes! We would be happy to perform a free audit of your accounts and marketing material to see if our services might work for you. At Centra we believe in adding value in any way we can.</p>
                            </div>
                    </div>

                    <button class="mobile-accordion">How long are your contracts?</button>
                    <div class="mobile-panel">
                            <span>Our contracts start at six months. We also offer eight months and one year spans. We prove our value each and every day and we aim to build long lasting partnerships that way.</span>
                    </div>

                    <button class="mobile-accordion">How much money do I need to spend on ads?</button>
                    <div class="mobile-panel">
                        <p>We recommend a minimum of $8,000 per platform. This will allow our team to confidently curate a custom digital marketing strategy that will integrate seamlessly with Meta and Google alorithms. Anything under these minimums will leave holes in key sectors that are vital to our performace and optimization models.</p>
                    </div>
                    <button class="mobile-accordion">Who does the work on my accounts?</button>
                    <div class="mobile-panel">
                        <p>All of our accounts here at Centra are managed and optimized by our team of seasoned marketing experts. Each of our team memebers has extensive exprience in digital marketing services and we look forward to assisting you in your endevors.</p>
                    </div>
                    <button class="mobile-accordion">Do I own the ads or do you keep them?</button>
                    <div class="mobile-panel">
                        <p>You will always maintain full ownership of all accounts, ads, and any other related marketing material. We help set up and manage your accounts once you have authorized us to do so. You will always keep everything.</p>
                    </div>
                    <button class="mobile-accordion">Do you offer creative services?</button>
                    <div class="mobile-panel">
                        <p>Centra is proud to be partnered with international creative agencies and we would be happy to provide a variety of options based on our clients needs. To be clear, Centra istself does not specialize in the creative aspect of digital marketing, as we prefer to focus on management and optimization of the ads themselves.</p>
                    </div>
                    <button class="mobile-accordion">How do I get started?</button>
                    <div class="mobile-panel">
                        <p>Just fill out a contact form by clicking the button below or by selecting 'Contact Us' from the menu. We look forward to speaking wtih you!</p>
                    </div>
                </div>
                <ContactForm/>            
            </div>
            <div class="mobile-footer">
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