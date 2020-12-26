import React, { useState, useEffect } from "react";
import axios from 'axios'
const MailerLite = require("mailerlite-api-v2-node").default;

const mailerLite = MailerLite("xxx");

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [userType, setUserType] = useState("");

  // GET THE SUBSCRIBER ID
  const getTheSubscriberId = async (newSubEmail) => {
    var req = await axios.post("/api/newSubscriber", { "newEmail": newSubEmail })
    console.log(req.data) // success if a new user subscribes
    if (req.status == 200) {
      setUserType(req.data.type);
      setUserID(req.data.id);

        console.log(userType, userID);
    
    } else {
      useEffect(() => {
        console.log(userID);
      }, [userID]);
      console.log(error);
    }

  };

  const _handleSubmit = (e) => {
    e.preventDefault();

    getTheSubscriberId(email);
  };


  return (
    <section className="subscribe-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Dołącz społeczności Sergio S Dorje</h2>
          <div className="bar"></div>
          <p>
            Zapisz się do newslettera. Otrzymasz wartościowe informajce
            bezpośrednio od Autora
          </p>
        </div>

        <form className="newsletter-form" onSubmit={_handleSubmit}>
          <input
            type="email"
            className="form-control"
            placeholder="Twój adre email"
            name="EMAIL"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
