import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Funfact2 extends React.Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="fun-facts-area ptb-100 ">
          <div className="fun-facts-inner-area mt-0">
            <div className="container-fluid">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="fun-facts-image">
                    <img src="/images/sergio2-s.jpg" alt="image" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="fun-facts-inner-content">
                    <h3>Dla kogo jest “Droga do szczęścia’’?</h3>
                    <p>
                      Każdy z nas spotyka problemy. Każdy z nas był kiedyś
                      zraniony. Każdy z nas toczy jakąś walkę. Ten program
                      pomoże Ci radzić sobie z kłodami, które czasem lądują pod
                      Twoimi nogami.
                    </p>
                    <p>
                      Nauczysz się żyć szczęśliwie - niezależnie od tego, ile
                      armat ktoś w Ciebie wyceluje. To Ty przejmiesz stery!
                    </p>
                    <div className="dlategojesli">
                    <p>Dlatego jeśli…</p>
                    <ul>
                      <li>Zdarza Ci się czuć źle i nieszczęśliwie</li>
                      <li>
                        Otaczasz się ludźmi, którzy negatywnie wpływają na Twoje
                        samopoczucie
                      </li>
                      <li>Pragniesz w końcu spełniać swoje marzenia</li>
                      <li>
                        Wiesz, że możesz żyć pełnią szczęścia, ale nie wiesz jak
                      </li>
                      <li>
                        Chcesz stworzyć dobry i wartościowy związek miłosny
                      </li>
                      <li>Chcesz zrozumieć siebie i swoje potrzeby</li>
                      <li>
                        Potrzebujesz wiedzy, która pomoże Ci walczyć z
                        negatywnymi emocjami
                      </li>
                      <li>Chcesz nauczyć się pracy z intencją</li>
                      <li>Pragniesz wyciszenia i spokoju</li>
                      <li>
                        Potrzebujesz mentora, który poprowadzi Cię za rękę przez
                        Twoją drogę do szczęścia…
                      </li>
                    </ul>
                    </div>
                    <Link href="#">
                      <a className="btn btn-primary">Jest dla mnie - chcę więcej!</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Funfact2;
