import React, { Component } from "react";
import buingOptions from "../../buyingOptions";
import Loader from "../Shared/Loader";
import { finalPath } from "../../pages/index";
class Pricing extends Component {
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
      <section className="pricing-area book-pricing ptb-100 sklep-prices">
        <div className="container">
          <div className="section-title">
            <h2>Easy Pricing Plans</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="price-header">
                  <h3 className="title">e-Book</h3>
                  <div className="price">
                    {buingOptions.ebook.price.toFixed(2)}<span className="dollar">zł</span>
                  </div>
                </div>

                <div className="price-footer">
                  <a
                    className="btn btn-primary"
                    href="/checkout?product=ebook"
                    onClick={this.showLoader.bind(this)}
                  >
                    Zamawiam
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
              <img src={finalPath + '/images/ksiazka.png'} alt="screenshot" />
                <div className="price-header">
                  <h3 className="title">Printed</h3>
                  <div className="price">
                    {buingOptions.paperCopy.price.toFixed(2)}<span className="dollar">zł</span>
                  </div>
                </div>

                <div className="price-footer">
                  <a className="btn btn-primary" href="/checkout?product=paperCopy"
                  onClick={this.showLoader.bind(this)}>
                    Zamawiam
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table">
                <div className="price-header">
                  <h3 className="title">Bundle</h3>
                  <div className="price">
                    {buingOptions.bundle.price.toFixed(2)}<span className="dollar">zł</span>
                  </div>
                </div>

                <div className="price-footer">
                  <a className="btn btn-primary" href="/checkout?product=bundle"
                  onClick={this.showLoader.bind(this)}>
                    Zamawiam
                  </a>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table">
                <div className="price-header">
                  <h3 className="title">Radykalna prawda w związku</h3>
                  <div className="price">
                    {buingOptions.test.price.toFixed(2)}<span className="dollar">zł</span>
                  </div>
                </div>

                <div className="price-footer">
                  <a className="btn btn-primary" href="/checkout?product=test"
                  onClick={this.showLoader.bind(this)}>
                    Zamawiam
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table">
                <div className="price-header">
                  <h3 className="title">Czy grupa jest sektą <br /> test</h3>
                  <div className="price">
                    {buingOptions.czygrupajestsekta.price.toFixed(2)}<span className="dollar">zł</span>
                  </div>
                </div>

                <div className="price-footer">
                  <a className="btn btn-primary" href="/checkout?product=test"
                  onClick={this.showLoader.bind(this)}>
                    Zamawiam
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
        <canvas id="canvas"></canvas>
      </section>
    );
  }
}

export default Pricing;
