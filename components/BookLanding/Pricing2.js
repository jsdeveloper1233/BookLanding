import React, { Component } from "react";
import Link from "next/link";

class Pricing2 extends Component {
  render() {
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
                  <h3 className="title">Tylko eBook</h3>
                  <div className="price-value">
                  &nbsp;&nbsp;38,90 <sup>zł</sup>
                  </div>
                </div>

                <ul className="pricing-content">
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie MOBI</li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie EPUB</li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie PDF</li>
                </ul>
                <Link href={{ pathname: '/checkout', query: { product: 'ebook' } }}>
                  <a className="btn btn-primary">KUP KSIĄŻKE</a>
                  
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">Tylko książka</h3>
                  <div className="price-value">
                  &nbsp;&nbsp;39,90 <sup>zł</sup>
                    <p>+ 15 - 17 zł wysyłka kurierem</p>
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>
                  <i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie papierowym
                  </li>
                </ul>
                <Link href={{ pathname: '/checkout', query: { product: 'pdf' } }}>
                  <a className="btn btn-primary">KUP EBOOK</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">Pakiet</h3>
                  <div className="price-value">
                  &nbsp;&nbsp; 69,90 <sup>zł</sup>
                    <p>+ 0 zł wysyłka kurierem !!</p>
                  </div>
                </div>

                <ul className="pricing-content">
                  <li>
                  <i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie papierowym
                  </li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie MOBI</li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie EPUB</li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie PDF</li>
                  <li>
                  <i className="icofont-tick-mark"></i>2x egzemplarze (dla par) książeczki drukowanej "Radykalna
                    Prawda w Związku"
                  </li>
                </ul>
                <Link href={{ pathname: '/checkout', query: { product: 'hard' } }}>
                  <a className="btn btn-primary">KUP PAKIET</a>
                </Link>
                <p className="you-save">Oszczędzasz 56 zł</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing2;
