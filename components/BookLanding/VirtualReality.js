import React, { Component } from "react";
import Pricing2 from "./Pricing2";

class VirtualReality extends Component {
  render() {
    return (
      <section className="next-generation-virtual-reality ptb-100" id="index">
        <div className="container">
          <div className="section-title">
            <h2>Spis treści</h2>
            <div className="bar"></div>
            <p>
            Poznaj spis treści książki ‘’Sekrety Rozwoju Osobistego’’ i dowiedz się, jakie obszary Twojego życia będziemy uzdrawiać. Musisz wiedzieć, że ten spis treści nie jest przypadkowy. Każda część książki to intymna rozmowa o najważniejszych aspektach Twojego życia… Najpierw ja rozmawiam z Tobą, a później Ty sam - wprowadzając do użytku (praktykując) zdobytą wiedzę - prowadzisz wewnętrzny dialog i zmieniasz swoje życie.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <div className="chapter-number">
                    {/* <span>ROZDZIAŁ 1</span> */}
                    <i className="icofont-square"></i>
                    <span className="chapter-number">1</span>
                  </div>
                </div>
                <h3>"Energia"</h3>
                <p>
                Dowiesz się jakimi zasobami energetycznymi dysponujesz i jakie powinieneś rozwijać, abyś mógł przemieszczać się w wybranym przez siebie kierunku.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">2</span>
                </div>
                <h3>"Pierwsze kroki do celu"</h3>
                <p>
                To ważna wiedza na temat wszystkich narzędzi, które musisz poznać, aby zrealizować swoje największe cele.  
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">3</span>
                </div>
                <h3>"Tantra"</h3>
                <p>
                Nauka o tym, czym jest prawdziwa tantra i jak korzystać z jej cudownych właściwości, by przynosiła nam wymarzone efekty. 
                </p>

              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">4</span>
                </div>
                <h3>"Medytacja"</h3>
                <p>
                Skarbnica wiedzy o tym, jak działa medytacja, w jaki sposób pozwala się rozwijać i wreszcie - która medytacja jest odpowiednia dla Ciebie.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">5</span>
                </div>
                <h3>"Czakry"</h3>
                <p>
                Ten rozdział mówi o ważnych centrach energetycznych Twojego organizmu i metodach ich stymulacji, tak by działały bez zakłóceń, przynosząc Ci korzyści.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">6</span>
                </div>
                <h3>"Seks i relacje uczuciowe"</h3>
                <p>
                Przydatne informacje i porady, jak być z drugim człowiekiem i jak unikać konfliktów, by związek mógł się rozwijać i dobrze nam służyć.
                </p>
            
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">7</span>
                </div>
                <h3>"Unikaj przeszkód i problemów"</h3>
                <p>
                Rozwój duchowy ma również swoją ciemną stronę. Wiedza o tym, jak nie wpaść w pułapkę uchroni Cię przed staniem się ofiarą manipulacji.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-item">
                <div className="icon">
                  <i className="icofont-square"></i>
                  <span className="chapter-number">8</span>
                </div>
                <h3>"Dalsze esploracje - o szkodliwości niektórych praktyk"</h3>
                <p>
                Na końcu mojej książki poznasz pułapki, które czekają na osoby dążące do rozwoju osobistego. Zdobędziesz wskazówki, które uchronią Cię przed toksycznymi ludźmi i wkroczeniem na złą ścieżkę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VirtualReality;
