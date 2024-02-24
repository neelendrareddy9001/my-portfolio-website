import React, { useState } from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import SocialIcons from "../SocialIcons";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  console.log(formData);

  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="contact" id="contact">
        <h3 className="contact_title">Get In Touch</h3>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <div className="contact_info">
                <MdOutlineEmail size={35} className="social_icon" />
                <h5>neelendrareddy123@gmail.com</h5>
                <a href="mailto:neelendrareddy123@gmail.com">
                  Send me a message
                </a>
              </div>
            </article>
            <article className="contact_option">
              <div className="contact_info">
                <RiMessengerLine size={35} className="social_icon" />

                <h5>panditi.neelendrareddy</h5>
                <a href="https://m.me/panditi.neelendrareddy.7">
                  Send a message
                </a>
              </div>
            </article>
            <article className="contact_option">
              <div className="contact_info">
                <BsWhatsapp size={35} className="social_icon" />

                <h5>+48739437031</h5>
                <a href="https://api.whatsapp.com/send?+48739437031">
                  Send a message
                </a>
              </div>
            </article>
          </div>
          {/* End of Contact Optons */}
          <div className="contact_form">
            <form action="">
              <input
                rel="norefereer"
                value={formData.name}
                type="text"
                name="name"
                placeholder="Your Full name"
                required
                onChange={(e) => setFormData(e.target.value)}
              />
              <input
                rel="noreferer"
                value={formData.email}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={(e) => setFormData(e.target.value)}
              />
              <textarea
                rel="noreferer"
                name="message"
                value={formData.textarea}
                onClick={(e) => setFormData(e.target.value)}
                rows="7"
                placeholder="Your Message"
                required
              />
              <button
                type="submit"
                onClick={handlerSubmit}
                className="btn btn-primary"
              >
                Send a mesage
              </button>
            </form>
          </div>
          <div className="social_icons">
            <SocialIcons className="icons" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
