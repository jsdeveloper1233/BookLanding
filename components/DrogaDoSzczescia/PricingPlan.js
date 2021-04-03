import React from "react";
import Link from "next/link";

class PricingPlan extends React.Component {
  render() {
    return (
      <section className="pricing-area ptb-100 bg-gray">
        <div className="container" id="pakiety">
          <div className="section-title">
            <h2>Droga do szczęścia</h2>
            <div className="bar"></div>
            <p>
              Przygotowałem dla Ciebie 2 pakiety. Zamawiając Pakiet VIP otrzymasz również sesje mentorskie ze mną, narzędzie "Radykalna prawda w związu" oraz eBook "Dziecko - jak uzyskać jego zaufanie".
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="pricingTable">
                {/* <div className="pricing-icon">
                  <i className="icofont-globe"></i>
                </div> */}
                <div className="price-Value">
                400<span className="currency">zł</span>
                </div>
                <div className="pricingHeader">
                  <h3 className="title">Program podstawowy</h3>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li className="active">Dzień 1: poznawanie siebie</li>
                    <li className="active">
                      Dzień 2: energia męska i żeńska w życiu codziennym
                    </li>
                    <li className="active">
                      Dzień 3: moc intencji i Joganidra
                    </li>
                    <li className="active">Dzień 4: relacje i związki</li>
                    <li className="active">
                      Dzień 5: neuropsychologia i rodzaje medytacji
                    </li>
                    <li className="active">
                      Dzień 6: powstanie patriarchatu i jego wpływ na nasze
                      życie
                    </li>
                    <li className="active">Dzień 7: świetlisty krąg</li>
                    <li className="active">
                      Dzień 8: o hormonach, życiu intymnym i braku libido z
                      perspektywy medycyny i psychologii
                    </li>
                    <li className="active">
                      Dzień 9: toksyczne relacje i wewnętrzne dziecko
                    </li>
                    <li className="active">
                      Dzień 10: unikanie przeszkód i grup toksycznych podczas w
                      drodze rozwoju osobistego
                    </li>
                    <li className="active">
                      Dzień 11: nauka odcinania i medytacja Tratak
                    </li>
                    <li>2 sesje mentorskie z Sergio S Dorje</li>
                    <li>Radykalna prawda w związku - eBook z ćwiczeniami</li>
                    <li>Dziecko - jak uzyskać jego zaufanie - eBook</li>
                  </ul>
                </div>
                <Link href="/">
                <a className="btn btn-primary">Dołączam!</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricingTable">
                {/* <div className="pricing-icon">
                  <i className="icofont-globe"></i>
                </div> */}
                <div className="price-Value">
                  550<span className="currency">zł</span>
                </div>
                <div className="pricingHeader">
                  <h3 className="title">Program VIP</h3>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li className="active">Dzień 1: poznawanie siebie</li>
                    <li className="active">
                      Dzień 2: energia męska i żeńska w życiu codziennym
                    </li>
                    <li className="active">
                      Dzień 3: moc intencji i Joganidra
                    </li>
                    <li className="active">Dzień 4: relacje i związki</li>
                    <li className="active">
                      Dzień 5: neuropsychologia i rodzaje medytacji
                    </li>
                    <li className="active">
                      Dzień 6: powstanie patriarchatu i jego wpływ na nasze
                      życie
                    </li>
                    <li className="active">Dzień 7: świetlisty krąg</li>
                    <li className="active">
                      Dzień 8: o hormonach, życiu intymnym i braku libido z
                      perspektywy medycyny i psychologii
                    </li>
                    <li className="active">
                      Dzień 9: toksyczne relacje i wewnętrzne dziecko
                    </li>
                    <li className="active">
                      Dzień 10: unikanie przeszkód i grup toksycznych podczas w
                      drodze rozwoju osobistego
                    </li>
                    <li className="active">
                      Dzień 11: nauka odcinania i medytacja Tratak
                    </li>
                </ul>
                <br />
                <p><strong>Kupując pakiet rozszerzony otrzymasz również narzędzia o łącznej wartości 750 zł</strong></p>
                    <ul>
                    <li className="active">2 sesje mentorskie z Sergio S Dorje</li>
                    <li className="active">Radykalna prawda w związku - eBook z ćwiczeniami</li>
                    <li className="active">Dziecko - jak uzyskać jego zaufanie - eBook</li>
                  </ul>
                </div>
                <Link href="/">
                  <a className="btn btn-primary">Dołączam!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingPlan;
