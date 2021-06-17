import React from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class CtaCard extends React.Component {
  render() {
    return (
      <div className="cta-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-7">
              <p>Wersja rozszerzona</p>
              <p>
                  Po zamówieniu otrzymasz najnowsze wydanie, rozszerzoną o 5 Językach Miłości.
              </p>
            </div>

            <div className="col-lg-5 col-md-5 text-right">
            <Link
                        className="btn btn-primary"
                        href="#price"
                        to="price"
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
