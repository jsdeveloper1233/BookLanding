import React, { Component } from "react";
import Link from "next/link";
import buingOptions from "../../buyingOptions";
import Loader from "../Shared/Loader";
import CornerRibbon from "react-corner-ribbon";

class Pricing2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  showLoader(event) {
    this.setState({ isLoading: true });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <section className="pricing-area ptb-100" id="kupteraz">
        <div className="container">
          <div className="section-title">
            <h2>
              Tylko w pakiecie
              <br /> "Radykalna Prawda w Związku"
            </h2>
            <div className="bar"></div>
            <p>Zamów książkę w pakiecie i oszczędzaj</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">
                    Tylko <span>książka</span>
                  </h3>
                  <div className="price-value">
                    &nbsp;&nbsp;{buingOptions.paperCopy.price.toFixed(2)}{" "}
                    <sup>zł</sup>
                    <p>
                      + {buingOptions.paperCopy.shipping.toFixed(2)} zł wysyłka
                      kurierem
                    </p>
                  </div>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie papierowym
                  </li>
                </ul>

                <a
                  className="btn btn-primary"
                  href="/checkout?product=paperCopy"
                  onClick={this.showLoader.bind(this)}
                >
                  ZAMÓW KSIĄŻKĘ
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">
                    Tylko <span>eBook</span>
                  </h3>
                  <div className="price-value">
                    &nbsp;&nbsp;{buingOptions.ebook.price.toFixed(2)}{" "}
                    <sup>zł</sup>
                    <p>darmowa wysyłka</p>
                  </div>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie MOBI
                  </li>
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie EPUB
                  </li>
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie PDF
                  </li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="/checkout?product=ebook"
                  onClick={this.showLoader.bind(this)}
                >
                  ZAMÓW EBOOK
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table-box">
                <CornerRibbon
                  position="top-right"
                  fontColor="#fff"
                  backgroundColor="#7A3760"
                  style={{letterSpacing: '1px', fontWeight:700, border: '2px dashed #FF8A73'}}
                >
                   Oszczędź {buingOptions.bundle.discount.toFixed(2)} zł
                </CornerRibbon>
                <div className="pricingTable-header">
                  <h3 className="title">
                    <span>Pakiet</span>
                  </h3>
                  <div className="price-value">
                    &nbsp;&nbsp; {buingOptions.bundle.price.toFixed(2)}{" "}
                    <sup>zł</sup>
                    <p>darmowa wysyłka</p>
                  </div>
                </div>
                <ul className="pricing-content">
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie papierowym
                  </li>
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie MOBI
                  </li>
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie EPUB
                  </li>
                  <li>
                    <i className="icofont-tick-mark"></i>Książka "Sekrety
                    rozwoju osobistego" <br />w formacie PDF
                  </li>
                  <li>
                    <i className="icofont-tick-mark"></i>Narzędzie "Radykalna Prawda w Związku"<br />w formacie PDF
                  </li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="/checkout?product=bundle"
                  onClick={this.showLoader.bind(this)}
                >
                  ZAMÓW PAKIET
                </a>
                {/* <p className="you-save">Oszczędzasz {buingOptions.bundle.discount} zł</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing2;
