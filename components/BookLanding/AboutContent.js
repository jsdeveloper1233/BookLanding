import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-area ptb-100">
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
                SKRETY ROZWOJU OSOBISTEGO to potężne narzędzie, dzięki któremu zaczniesz żyć świadomie i nauczysz się sterować swoją rzeczywistością. Czas na podróż w kierunku rzeczywistości, o jakim marzysz. Tylko Ty masz w sobie moc dokonywania zmian i sterowania swoim życiem.
                </p>
                <p>
                  Wiesz w teorii, że ‘’możesz wszystko’’, ale wciąż zastanawiasz
                  się: Jak wykorzystywać SIŁĘ SWOJEGO UMYSŁU, by przeskakiwać te
                  mury? Zapamiętaj: Tylko Ty masz w sobie moc dokonywania zmian
                  i sterowania swoim życiem.
                </p>
                <p>
                  Poznaj sekretne metody i tajną wiedzę, która pozwoli Ci wejść
                  na drogę kierująca do wewnętrznej mocy i mądrości. SEKRETY
                  ROZWOJU OSOBISTEGO to potężne narzędzie, dzięki któremu
                  zaczniesz żyć świadomie i nauczysz się sterować swoją
                  rzeczywistością. Czas na podróż w kierunku życia, o jakim
                  marzysz.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <img src="/images/ksiazka-ig-sm.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
