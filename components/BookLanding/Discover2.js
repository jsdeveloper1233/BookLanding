import React, { Component } from "react";
import Image from 'next/image'
class Discover2 extends Component {
  render() {
    return (
      <section className="book-discover ptb-100">
        <div className="container">
          <h3>NAJWIĘKSZE WARTOŚCI Z KSIĄŻKI</h3>
          <p className="subtitle">
            Książka, którą właśnie poznajesz, to potężne narzędzie samorozwoju,
            dzięki któremu dowiesz się, jak sterować swoim życiem i radzić sobie
            ze wszystkimi przeszkodami.
          </p>
          <img
                  src="/images/brush.png" 
                  className="brush"/>
          <p className="thanksto">Dzięki SEKRETOM ROZWOJU OSOBISTEGO… 
    </p>
          
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="discover-content">
                <ul>
                  <li>
                    <i className="icofont-check"></i> Rozszerzysz swoją
                    świadomość.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Nauczysz się odbierać
                    świat w sposób duchowy.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Dowiesz się jak
                    minimalizować błędy, zwiększać skuteczność swoich działań i
                    unikać traum.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Poznasz typy energii i
                    nauczysz się być w równowadze energetycznej.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Nauczysz się pracy z
                    intencją.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Zdobędziesz siłę, by
                    uwolnić się od negatywnych osób.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Poznasz sekret udanej
                    komunikacji w związku.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Dowiesz się, jak wyznaczać
                    cele, by spełniać swoje najgłębsze pragnienia.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Uświadomisz sobie moc
                    samodyscypliny.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Dowiesz się, jak oczyszczać
                    umysł z negatywnych wpływów.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Zrozumiesz swoje
                    wewnętrzne dziecko.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Dowiesz się, czym jest
                    PRAWDZIWA tantra.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Zobaczysz jak nie paść
                    ofiarą manipulacji złego lidera.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Zrozumiesz swoje
                    wewnętrzne dziecko.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="discover-img">
                <div className="discover-img-ksiazka-2">
                    <Image
                      layout="fill"
                      src="/images/ksiazka-2.png"
                      alt="Sekrety Rozwoju Osobistego"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover2;
