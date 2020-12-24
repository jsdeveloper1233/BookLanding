import React, { useState, useEffect } from "react";
const MailerLite = require("mailerlite-api-v2-node").default;

const mailerLite = MailerLite("xxx");

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [userType, setUserType] = useState("");

  // GET THE SUBSCRIBER ID
  const getTheSubscriberId = (newSubEmail) => {
    mailerLite
      .getSubscribers()
      .then((subList) => {
        subList.filter((singleSub) => {
          if (singleSub.email === newSubEmail) {
            setUserType(singleSub.type);
            setUserID(singleSub.id);
          }
        });
      })
      .catch((error) => {
        useEffect(() => {
          console.log(userID);
        }, [userID]);
        console.log(error);
      });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();

    getTheSubscriberId(email);
  };

  useEffect(() => {
    console.log(userID, userType);
    // getUserType(userID);
  }, [userID, userType]);

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
