import React, { useState } from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import SocialIcons from "../SocialIcons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
                <h4>Email</h4>
                <h5>neelendrareddy123@gmail.com</h5>
                <a href="mailto:neelendrareddy123@gmail.com">
                  Send me a message
                </a>
              </div>
            </article>
            <article className="contact_option">
              <div className="contact_info">
                <RiMessengerLine size={35} className="social_icon" />
                <h4>Messenger</h4>
                <h5>panditi.neelendrareddy</h5>
                <a href="https://m.me/panditi.neelendrareddy.7">
                  Send a message
                </a>
              </div>
            </article>
            <article className="contact_option">
              <div className="contact_info">
                <BsWhatsapp size={35} className="social_icon" />
                <h4>WhatsApp</h4>
                <h5>+48739437031</h5>
                <a href="https://api.whatsapp.com/send?+48739437031">
                  Send a message
                </a>
              </div>
            </article>
          </div>
          {/* End of Contact Optons */}
          <div>
            <form action="">
              <input
                rel="norefereer"
                value={name}
                type="text"
                name="name"
                placeholder="Your Full name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                rel="noreferer"
                value={email}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rel="noreferer"
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button
                type="submit"
                onClick={handlerSubmit}
                className="btn btn-primary"
              >
                Sent a mesage
              </button>
            </form>
          </div>
        </div>
        {/* <div className="social_icons">
          <SocialIcons className="icons" />
        </div> */}
      </section>
    </>
  );
};
export default Contact;
