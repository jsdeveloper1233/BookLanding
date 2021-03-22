import React, { useState, useEffect, useCallback } from "react";

const LeaveAReview = ({ limit, value }) => {
  const [{ content, wordCount }, setContent] = useState({
    content: value,
    wordCount: 0,
  });

  const setFormattedContent = useCallback(
    (text, e) => {
      let words = text.split(" ").filter(Boolean);
      if (words.length > limit) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        setContent({ content: text, wordCount: words.length });
      }
    },
    [limit, setContent]
  );

  useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <section className="contact-area ptb-100">
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

          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      required={true}
                      data-error="Proszę wpisz tutaj Twoje imię"
                      placeholder="Imię i nazwisko"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      required={true}
                      data-error="Proszę wpisz tutaj Twój adres email"
                      placeholder="Twój adres email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      required={true}
                      data-error="Proszę wpisz tutaj Twój coś o sobie, np. Twój zawód"
                      placeholder="O Tobie / Twj zawód (pojawi się pod Twoim imieniem)"
                    />
                    <div className="help-block with-errors"></div>
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
                      required
                      data-error="Napisz tutaj tekst recenzji"
                      placeholder={`Twoja recenzja, minimum 40 słów, maksymalnie ${limit}.`}
                      onChange={(e) => setFormattedContent(e.target.value, e)}
                      value={content}
                    />
                    <div className="help-block with-errors"></div>
                    <em clasName="wordcount">
                    {wordCount}/{limit} słów
                  </em>
                  </div>

                  <div className="form-group uploadphoto">
                    <label htmlFor="sendphoto" className="btn-default p-0">
                      Dodaj swoję zdjęcie  
                    </label>

                    <input
                    required
                      id="sendphoto"
                      name="sendphoto"
                      type="file"
                      accept="image/*"
                      //   onChange={this.selectFile}
                    />
                  </div>


                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      // value={state.newsletter.value}
                      // onChange={handleCheckBoxOnChange}
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
                      // value={state.newsletter.value}
                      // onChange={handleCheckBoxOnChange}
                      name="zgoda-opinie"
                      className="form-check-input form-controla"
                      id="zgoda-opinie"
                      required
                    />
                    <label className="form-check-label" htmlFor="zgoda-opinie">
                      Zgadzam się na dodawanie opinij/recenzji zgodnie z regulaminem.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">
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
