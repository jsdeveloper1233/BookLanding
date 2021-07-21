import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Reaptcha from 'reaptcha';

import { NotificationContainer, NotificationManager } from 'react-notifications';

var axios = require('axios');

const LeaveAReview = ({ limit, value }) => {
  const [{ content, charCount, contentError }, setContent] = useState({
    content: value,
    charCount: 0,
    contentError: ''
  });

  const products = ["książka", "ebook", "pakiet"];

  const [{ name, nameError }, setName] = useState({ name: '', nameError: '' });
  const [{ email, emailError }, setEmail] = useState({ email: '', emailError: '' });
  const [{ client, clientError }, setClient] = useState({ client: '', clientError: '' });
  const [{ captcha, captchaError }, setCaptcha] = useState({ captcha: '', captchaError: '' });
  const [newsletter, setNewsletter] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [{ agree, agreeError }, setAgree] = useState({ agree: false, agreeError: '' });
  const [{ file, fileError }, setFile] = useState({ file: '', fileError: '' });
  const [{product, productError}, setProduct] = useState({product: '', productError: ''});

  const onSetSelectAll = function (value) {
    setSelectAll(value);
    setNewsletter(value);
    setAgree({ agree: value, agreeError: '' });
  }

  const onSetAgree = function (value) {
    setAgree({ agree: value, agreeError: '' });
    setSelectAll(newsletter && value);
  }

  const onSetNewsletter = function (value) {
    setNewsletter(value);
    setSelectAll(value && agree);
  }

  const setFormattedContent = useCallback(
    (text, e) => {
      let chars = text.length;
      if (chars > limit) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        setContent({ content: text, charCount: chars, contentError: '' });
      }
    },
    [limit, setContent]
  );

  useEffect(() => {
    setFormattedContent(content);
  }, []);

  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };

  const submit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!name) {
      setName({ name: name, nameError: 'To pole jest wymagane' });
      valid = false;
    }

    if (!product) {
      setProduct({ product: product, productError: 'To pole jest wymagane' });
      valid = false;
    }

    if (!email) {
      setEmail({ email: email, emailError: 'To pole jest wymagane' });
      valid = false;
    }

    if (!client) {
      setClient({ client: client, clientError: 'Proszę wpisz tutaj Twój coś o sobie, np. Twój zawód' });
      valid = false;
    }

    if (!content) {
      setContent({ content: content, contentError: 'Napisz tutaj tekst recenzji', charCount: charCount });
      valid = false;
    }

    if (charCount < 40 || charCount > limit) {
      setContent({ content: content, contentError: `To pole musi zawierać od 40 do ${limit} znaków.`, charCount: charCount });
      valid = false;
    }

    if (!agree) {
      setAgree({ agree: agree, agreeError: 'To pole jest wymagane' });
      valid = false;
    }

    if (!captcha) {
      setCaptcha({ captcha: captcha, captchaError: 'To pole jest wymagane' });
      valid = false;
    }

    if (valid) {

      const formData = new FormData();
      formData.append('sendphoto', file);
      formData.append('name', name);
      formData.append('product', product);
      formData.append('email', email);
      formData.append('client', client);
      formData.append('message', content);
      formData.append('captcha', captcha);
      formData.append('newsletter', newsletter ? 'true' : '');
      formData.append('zgoda', agree ? 'true' : '');
      formData.append('selectAll', selectAll ? 'true' : '');

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      axios.post("/api/review", formData, config)
        .then((x) => {
          NotificationManager.success('Dziękujemy za Twoją opinię!');
        }).catch(e => {
          NotificationManager.error("Błąd. Twoja opinia nie została dodana.");
        });
    }
  };

  return (
    <section className="contact-area ptb-100">
      <NotificationContainer></NotificationContainer>
      <div className="container">
        <div className="section-title">
          <h2>Napisz swoją opinię lub recenzję</h2>
          <div className="bar"></div>
          <p>Wypełnij formularz ze swoją opinią</p>
        </div>

        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src="/images/marketing.png" alt="image" />
          </div>

          <div className="col-lg-6 col-md-12 checkout-area">
            <form id="contactForm" className="reviewform">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"

                      onChange={(e) => setName({ name: e.target.value, nameError: '' })}
                      placeholder="Imię i nazwisko"
                    />
                    <div className="help-block with-errors">
                      {nameError && <p style={errorStyle}>{nameError}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"

                      onChange={(e) => setEmail({ email: e.target.value, emailError: '' })}
                      placeholder="Twój adres email"
                    />
                    <div className="help-block with-errors">
                      {emailError && <p style={errorStyle}>{emailError}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="client"
                      className="form-control"
                      onChange={(e) => setClient({ client: e.target.value, clientError: '' })}
                      placeholder="O Tobie / Twój zawód (pojawi się pod Twoim imieniem)"
                    />
                    <div className="help-block with-errors">
                      {clientError && <p style={errorStyle}>{clientError}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <select
                      name="product"
                      className="form-control"
                      value={product}
                      onChange={(e) => setProduct({product: e.target.value, productError: ''})}>
                        <option key="empty" value="" disabled>Produkt którego dotyczy recenzja</option>
                      {products.map(x =>
                        <option key={x} value={x}>{x}</option>
                      )}
                    </select>

                    <div className="help-block with-errors">
                      {productError && <p style={errorStyle}>{productError}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                      placeholder={`Twoja recenzja, minimum 40 znaków, maksymalnie ${limit}.`}
                      value={content || ''}
                      onChange={(e) => setFormattedContent(e.target.value, e)}
                    />
                    <div className="help-block with-errors">
                      {contentError && <p style={errorStyle}>{contentError}</p>}
                    </div>
                    <em className="wordcount">
                      {charCount}/{limit} znaków
                    </em>
                  </div>

                  <div className="form-group uploadphoto">
                    <label htmlFor="sendphoto" className="btn-default p-0 sendphoto">
                      Dodaj swoję zdjęcie
                    </label>

                    <input
                      id="sendphoto"
                      name="sendphoto"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={e => setFile({ file: e.target.files[0], fileError: '' })}
                    //   onChange={this.selectFile}
                    />

                    <div className="help-block with-errors">
                      {fileError && <p style={errorStyle}>{fileError}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input form-controla"
                      onChange={(e) => onSetSelectAll(e.target.checked)}
                      value={!!selectAll}
                      checked={!!selectAll}
                      name="selectAll"
                      className="form-check-input form-controla"
                      id="selectAll"
                    />
                    <label className="form-check-label" htmlFor="selectAll">
                      Zaznacz wszystkie zgody
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input form-controla"
                      value={!!newsletter}
                      checked={!!newsletter}
                      onChange={(e) => onSetNewsletter(e.target.checked)}
                      name="newsletter"
                      className="form-check-input form-controla"
                      id="newsletter"
                    />
                    <label className="form-check-label" htmlFor="newsletter">
                      Tak, interesuję się takimi tematami i wyrażam zgodę na
                      zapisanie mnie do newslettera.
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input form-controla"
                      value={!!agree}
                      checked={!!agree}
                      // onChange={handleCheckBoxOnChange}
                      onChange={(e) => onSetAgree(e.target.checked)}
                      name="zgoda"
                      className="form-check-input form-controla"
                      id="zgoda-opinie"
                    />
                    <label className="form-check-label" htmlFor="zgoda-opinie">
                      Zgadzam się na dodawanie opinij zgodnie z{" "}
                      <Link href="/regulamin-opinii">
                        <a target="_blank">Regulaminem opinii.</a>
                      </Link>
                    </label>

                    <div className="help-block with-errors">
                      {agreeError && <p style={errorStyle}>{agreeError}</p>}
                    </div>

                  </div>

                  <br />
                  <Reaptcha sitekey={process.env.NEXT_PUBLIC_CAPTCHA_CLIENT} onVerify={(captcha) => setCaptcha({ captcha: captcha, captchaError: '' })} /> 


                  <div className="help-block with-errors">
                    {captchaError && <p style={errorStyle}>{captchaError}</p>}
                  </div>

                  <button type="button" className="btn btn-primary" onClick={submit}>
                    Wyślij opinię
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveAReview;
