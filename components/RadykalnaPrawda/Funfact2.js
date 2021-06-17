import React from "react";
import {default as NextLink}  from "next/link";
import {
  Link,
} from "react-scroll";
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
    const {disable} = this.props;
    return (
      <React.Fragment>
        <section className="fun-facts-area ptb-100 ">
          <div className="fun-facts-inner-area mt-0">
            <div className="container-fluid">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="fun-facts-image brochure">
                    <img src="/images/radykalna-brochure.jpg" alt="image" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="fun-facts-inner-content">
                    <h3>Nieważne, na którym etapie jesteś :)</h3>
                    <p>
                    Nie ma to żadnego znaczenia i nie stanowi przeszkody w uczeniu Cię komunikacji w związku, ponieważ wszystkie podane typy osób chcą tego samego, a mianowicie…
                    </p>
                    <div className="dlategojesli">
                    <ul>
                      <li>Chcą stworzyć szczęśliwy związek, kochać i być kochanym.</li>
                      <li>
                      Chcą, by ich relacja z drugą osobą była bezpieczną przystanią, a nie polem bitwy.
                      </li>
                      <li>Chcą być rozumianym i rozumieć osobę, z którą dzielą życie.</li>
                      <li>
                      Chcą związku pełnego szczerości i zaufania.
                      </li>
                      <li>
                      Chcą mieć pewność, że po latach nie dowiedzą się o swoim parterze "niewygodnej prawdy".
                      </li>
                    </ul>
                    </div>

                    <button disabled={disable} className={`btn btn-primary order-btn ${
                    disable ? "btn-disabled" : ""
                  }`}>
                    <Link
                        // className="btn btn-primary whitetext"
                        activeClass="active"
                        to="price"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >
                        Jest dla mnie!
                      </Link>
                </button>

                    {/* <Link href="#">
                      <a className="btn btn-primary">Jest dla mnie - chcę więcej!</a>
                    </Link> */}
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
