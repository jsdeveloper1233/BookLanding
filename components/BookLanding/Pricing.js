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
          {/* <div className="section-title">
            <h2>Easy Pricing Plans</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}




          <div className="row">

          <div className="col-lg-6 col-md-6">
              <div className="pricing-table">
              <img src={finalPath + '/images/sekrety-rozwoju-osobistego-papier-gr.jpg'} alt="screenshot" />
                <div className="price-header">
                  <h3 className="title">KSIĄŻKA <br /> "Sekrety Rozwoju Osobistego"</h3>
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

          <div className="col-lg-6 col-md-6">
              <div className="pricing-table">
              <img src={finalPath + '/images/sekrety-rozwoju-osobistego-ebook-gr.jpg'} alt="screenshot" />
                <div className="price-header">
                  <h3 className="title">EBOOK <br /> "Sekrety Rozwoju Osobistego"</h3>
                  <div className="price">
                  {buingOptions.ebook.price.toFixed(2)}<span className="dollar">zł</span>
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


            <div className="col-lg-6 col-md-6">
              <div className="pricing-table">
              <img src={finalPath + '/images/radykalna-prawda-w-zwiazku.jpg'} alt="screenshot" />
                <div className="price-header">
                <h3 className="title">EBOOK <br /> "Radykalna Prawda w Związku"</h3>
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



            <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table">
                <img src={finalPath + '/images/ksiazka-bundle.jpg'} alt="screenshot" />
                <div className="price-header">
                  <h3 className="title">PAKIET <br /> KSIĄŻKA PAPIEROWA + EBOOK + RADYKALNA PRAWDA W ZWIĄZKU</h3>
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
          

            <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table">
                <img src={finalPath + '/images/droga-do-szczescia.jpg'} alt="screenshot" />
                <div className="price-header">
                  <h3 className="title">KURS ONLINE<br /> PROGRAM: DROGA DO SZCZĘŚCIA</h3>
                  <span className="readmore"><a href="/droga-do-szczescia">➜ Czytaj więcej o programie</a></span>
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


            <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricing-table">
                <img src={finalPath + '/images/droga-do-szczescia-vip.jpg'} alt="screenshot" />
                <div className="price-header">
                  <h3 className="title">KURS ONLINE<br /> PROGRAM: DROGA DO SZCZĘŚCIA vip</h3>
                  <span className="readmore"><a href="/droga-do-szczescia">➜ Czytaj więcej o programie</a></span>
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




          </div>
        </div>
        <canvas id="canvas"></canvas>
      </section>
    );
  }
}

export default Pricing;
