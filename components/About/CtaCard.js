import React from "react";
import Link from "next/link";

class CtaCard extends React.Component {
  render() {
    return (
      <div className="cta-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-7">
              <p>Zrób pierwszy krok - to Twój czas!</p>{" "}
              <p>
                Zamów ‘’Sekrety Rozwoju Osobistego’’ i wyrusz w swoją własną
                drogę ku zmianie, szczęściu i spełnieniu.
              </p>
            </div>

            <div className="col-lg-5 col-md-5 text-right">
                <a className="btn btn-primary" href="#kupteraz">Zamów książkę teraz!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CtaCard;
