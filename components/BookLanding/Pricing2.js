import React, { Component } from "react";
import Link from "next/link";
import buingOptions from "../../buyingOptions";
import Loader from "../Shared/Loader"

class Pricing2 extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  showLoader(event) {
    this.setState({isLoading: true});
  }

  render() {

    if(this.state.isLoading) {
      return (<Loader />);
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
                  <h3 className="title">Tylko książka</h3>
                  <div className="price-value">
                  &nbsp;&nbsp;{buingOptions.paperCopy.price} <sup>zł</sup>
                    <p>+ {buingOptions.paperCopy.shipping} zł wysyłka kurierem</p>
                  </div>
                </div>
                <ul className="pricing-content">
                  <li>
                  <i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie papierowym
                  </li>
                </ul>
               
                  <a className="btn btn-primary" href="/checkout?product=paperCopy" onClick={this.showLoader.bind(this)}>KUP KSIĄŻKĘ</a>
            
              </div>
            </div>

                   
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">Tylko eBook</h3>
                  <div className="price-value">
                  &nbsp;&nbsp;{buingOptions.ebook.price} <sup>zł</sup>
                  </div>
                </div>
                <ul className="pricing-content">
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie MOBI</li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie EPUB</li>
                  <li><i className="icofont-tick-mark"></i>Książka "Sekrety rozwoju osobistego" w formacie PDF</li>
                </ul>
                <a className="btn btn-primary" href="/checkout?product=ebook" onClick={this.showLoader.bind(this)}>KUP EBOOK</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table-box">
                <div className="pricingTable-header">
                  <h3 className="title">Pakiet</h3>
                  <div className="price-value">
                  &nbsp;&nbsp; {buingOptions.bundle.price} <sup>zł</sup>
                    <p>+ {buingOptions.bundle.shipping} zł wysyłka kurierem !!</p>
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
                <a className="btn btn-primary" href="/checkout?product=bundle" onClick={this.showLoader.bind(this)}>KUP PAKIET</a>
                <p className="you-save">Oszczędzasz {buingOptions.bundle.discount} zł</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing2;
