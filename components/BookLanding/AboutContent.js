import React, { Component } from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class AboutContent extends Component {
  render() {
    return (
      <section className="about-area ptb-100 poznaj-sekretne">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center row-reverse">
            <div className="section-title all-width">
              <h2>
              Poznaj sekretne metody i tajną wiedzę, która pozwoli Ci wejść na drogę kierująca do wewnętrznej mocy i mądrości.
                <br />
                {/* <span>Często o tym słyszysz, prawda?</span> */}
              </h2>
              <div className="bar"></div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="about-content">
                <p>
                <strong>SEKRETY ROZWOJU OSOBISTEGO</strong> to potężne narzędzie, dzięki któremu zaczniesz żyć świadomie i nauczysz się sterować swoją rzeczywistością.</p>
                
                <p>Czas na podróż w kierunku rzeczywistości, o jakiej marzysz. Tylko Ty masz w sobie <strong>moc dokonywania zmian</strong> i sterowania swoim życiem.
                </p>
                <p>
                  Wiesz w teorii, że ‘’możesz wszystko’’, ale wciąż zastanawiasz
                  się: Jak wykorzystywać <strong>SIŁĘ SWOJEGO UMYSŁU</strong>, by przeskakiwać mury?
                </p>
                <p>
                  Poznaj sekretne metody i tajną wiedzę, która pozwoli Ci wejść
                  na drogę kierująca do wewnętrznej mocy i mądrości.
                </p>
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

            <div className="col-lg-4 col-md-12 image-container">
              <img src="/images/ksiazka-ig-sm.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
