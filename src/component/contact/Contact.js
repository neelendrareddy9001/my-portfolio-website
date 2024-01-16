import React, { useState } from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="contact">
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <h5 className="text-center ">Get In Touch</h5>
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>neelendrareddy123@gmail.com</h5>
              <a href="mailto:neelendrareddy123@gmail.com">Send me a message</a>
            </article>
            <article className="contact_option">
              <RiMessengerLine />
              <h4>Messenger</h4>
              <h5>panditi.neelendrareddy</h5>
              <a href="https://m.me/panditi.neelendrareddy.7">Send a message</a>
            </article>
            <article className="contact_opton">
              <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+48739437031</h5>
              <a href="https://api.whatsapp.com/send?+48739437031">
                Send a message
              </a>
            </article>
          </div>
          {/* End of Contact Optons */}
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
            <button type="submit" className="btn btn-primary">
              Sent a mesage
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
