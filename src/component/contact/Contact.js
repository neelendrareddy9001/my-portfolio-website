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
      <section className="contact section" id="contact">
        <h3 className="section_title">Get In Touch</h3>

        <div className="container contact_container grid">
          <div className="contact_content">
            <h3 className="contact_title">Talk to me</h3>

            <article className="contact_options">
              <div className="contact_option">
                <MdOutlineEmail size={35} className="social_icon" />
                <h5>neelendrareddy123@gmail.com</h5>
                <a href="mailto:neelendrareddy123@gmail.com">
                  Send me a message
                </a>
              </div>
            </article>
            <article className="contact_options">
              <div className="contact_option">
                <RiMessengerLine size={35} className="social_icon" />

                <h5>panditi.neelendrareddy</h5>
                <a href="https://m.me/panditi.neelendrareddy.7">
                  Send a message
                </a>
              </div>
            </article>
            <article className="contact_options">
              <div className="contact_option">
                <BsWhatsapp size={35} className="social_icon" />

                <h5>+48739437031</h5>
                <a href="https://api.whatsapp.com/send?+48739437031">
                  Send a message
                </a>
              </div>
            </article>
          </div>

          <div className="contact_content">
            <h3 className="contact_title">Write me your message</h3>

            <form form="action" className="contact_form">
              <div className="contact_from-div">
                <label className="contact_form-tag">Name</label>
                <input
                  rel="norefereer"
                  value={formData.name}
                  type="text"
                  name="name"
                  className="contact_form-input"
                  placeholder="Your Full name"
                  required
                  onChange={(e) => setFormData(e.target.value)}
                />
              </div>
              <div className="contact_form-div">
                <label className="contact_form-tag">Email</label>
                <input
                  rel="noreferer"
                  value={formData.email}
                  type="email"
                  name="email"
                  className="contact_form-input"
                  placeholder="Your Email"
                  required
                  onChange={(e) => setFormData(e.target.value)}
                />
              </div>
              <div className="contact_form-div">
                <label className="contact_form-tag">Message</label>
                <textarea
                  rel="noreferer"
                  name="message"
                  value={formData.textarea}
                  onChange={(e) => setFormData(e.target.value)}
                  cols="30"
                  rows="10"
                  className="contact_form-input"
                  style={{ width: "100%", height: "150px" }}
                  required
                />
              </div>
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
