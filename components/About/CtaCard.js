import React from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
            <Link
                        className="btn btn-primary"
                        href="#kupteraz"
                        to="kupteraz"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >
                        Zamów teraz!
                      </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CtaCard;
