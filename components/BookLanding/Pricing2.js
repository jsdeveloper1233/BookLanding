import React, { Component } from "react";
import Link from "next/link";

class Pricing2 extends Component {
  render() {
    return (
      <section className="pricing-area ptb-100">
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
                  <h3 className="title">Tylko eBook</h3>
                  <div className="price-value">
                    38,90 <sup>zł</sup>
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>Książka "Sekrety rozwoju osobistego" w formacie MOBI</li>
                  <li>Książka "Sekrety rozwoju osobistego" w formacie EPUB</li>
                  <li>Książka "Sekrety rozwoju osobistego" w formacie PDF</li>
                </ul>
                <Link href="#">
                  <a className="btn btn-primary">KUP KSIĄŻKE</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">Tylko książka</h3>
                  <div className="price-value">
                    39,90 <sup>zł</sup>
                    <p>+ 15 - 17 zł wysyłka kurierem</p>
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>
                    Książka "Sekrety rozwoju osobistego" w formacie papierowym
                  </li>
                </ul>
                <Link href="#">
                  <a className="btn btn-primary">KUP EBOOK</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">Pakiet</h3>
                  <div className="price-value">
                    69,90 <sup>zł</sup>
                    <p>+ 15 - 17 zł wysyłka kurierem</p>
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>
                    Książka "Sekrety rozwoju osobistego" w formacie papierowym
                  </li>
                  <li>Książka "Sekrety rozwoju osobistego" w formacie MOBI</li>
                  <li>Książka "Sekrety rozwoju osobistego" w formacie EPUB</li>
                  <li>Książka "Sekrety rozwoju osobistego" w formacie PDF</li>
                  <li>
                    2x egzemplarze (dla par) książeczki drukowanej "Radykalna
                    Prawda w Związku"
                  </li>
                </ul>
                <Link href="#">
                  <a className="btn btn-primary">KUP PAKIET</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing2;
