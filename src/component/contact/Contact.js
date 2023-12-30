import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="contacts-container">
      <div className="contact_form_container">
        <form onSubmit={handlerSubmit}>
          <div className="input_text">
            <label htmlFor="Name">
              <input
                type="text"
                value={name}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter name"
              ></input>
            </label>
          </div>
          <div className="input-text">
            <label type="Email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
                Enter email
              </input>
            </label>
          </div>
          <div className="input-text">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              Enter pasowrd placeholder
            </input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
