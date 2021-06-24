import React, { useState, useEffect } from "react";
import axios from 'axios'
const MailerLite = require("mailerlite-api-v2-node").default;

const mailerLite = MailerLite("xxx");

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  // GET THE SUBSCRIBER ID
  const getTheSubscriberId = async (newSubEmail) => {
    var req = await axios.post("/api/newSubscriber", { "newEmail": newSubEmail })
    console.log(req.data) // success if a new user subscribes
    if (req.data.message === "success") {
      setStatus("success")
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
          <h2>Dołącz do społeczności Sergio S Dorje</h2>
          <div className="bar"></div>
          <p>
            Zapisz się do newslettera. Otrzymasz wartościowe informacje bezpośrednio od Autora
          </p>
        </div>

        <form className="newsletter-form" onSubmit={_handleSubmit}>
          <input
            type="email"
            className="form-control"
            placeholder="Twój adres email"
            name="EMAIL"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Zapisz się
          </button>
        </form>
          {status === "success" && <p className="newsletter-success-textbox"><i class="icofont-heart"></i> Świetnie! Sprawdź w mailu i potwierdź.<br /><span>P.s. Jeśli nie ma maila, sprawdź w "spamie"</span></p>}
      </div>
    </section>
  );
};

export default Subscribe;
