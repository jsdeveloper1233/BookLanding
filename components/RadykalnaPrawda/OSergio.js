import React, { Component } from "react";
import { finalPath } from "../../pages/index";

class OSergio extends Component {
  render() {
    return (
      <section className="book-discover ptb-100" id="author">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h3>O AUTORZE</h3>
                <span>Sergio S Dorje</span>
                <p>
                Absolwent Szkoły Medycznej PWSM w Warszawie. W ciągu wielu lat rozwoju osobistego i duchowego spotkałem setki osób na swojej praktyce masażu, terapii Bowena, sesjach uzdrawiania i Biodynamicznego Oddechu i Uwalniania Traum, na niezlicznych kręgach, kursach i warsztatach rozwojowych w wielu krajach na świecie.
                </p>
                <p>
                Dzięki temu zdobyłem wiedzę, która jest niezbędna, żeby pomóc ludziom w mojej codziennej praktyce. Temat związków jest już pokryty przez literaturę, niestety jeszcze nie było konkretnego narzędzia, dzięki czemu można zminimalizować ryzyka nieudanego związku.
                </p>
                <p>
                Wiele lat doświadczeń pracy z ludźmi i własnej przyczyniły się do powstania narzędzia Radykalna Prawda w Związku©.
                </p>
                <p>Cieszę się, że mogę się nim z Wami podzielić.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-img">
                <img src={finalPath + "/images/sergiosdorje.jpg"} alt="Sekrety rozwoju osobistego" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OSergio;
