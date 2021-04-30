import React, { Component } from "react";
import Link from "next/link";
import { finalPath } from "../../pages/index";
class Platform extends Component {
  render() {
    return (
      <section className="platform-connect ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Obserwuj Autora w mediach społecznościowych</h2>
            </div>


            <div className="col-lg-5 col-md-6 socialbox">
              <a className="box" href="https://www.instagram.com/sergiosdorje/" target="_blank" rel="noopener">
                  <img
                    src={finalPath + "/images/instagram.png"}
                    alt="instagram"
                  />

                  <h3>Instagram</h3>
                  <span>Sergio S Dorje</span>

                  <i className="icofont-bubble-right"></i>
              </a>
            </div>

            <div className="col-lg-5 col-md-6 socialbox">
              <a className="box" href="https://www.instagram.com/sekretyrozwojuosobistego/" target="blank">
                  <img
                    src={finalPath + "/images/instagram.png"}
                    alt="instagram"
                  />

                  <h3>Instagram</h3>
                  <span>Sekrety Rozwoju Osobistego</span>

                  <i className="icofont-bubble-right"></i>
              </a>
            </div>
          </div>




          <div className="row">
            <div className="col-lg-12 col-md-12">
            </div>


            <div className="col-lg-5 col-md-6 socialbox">
              <a className="box" href="https://www.facebook.com/sergiosdorje/" target="_blank" rel="noopener">
                  <img
                    src={finalPath + "/images/facebook.png"}
                    alt="facebook"
                  />

                  <h3>Facebook</h3>
                  <span>Sergio S Dorje</span>

                  <i className="icofont-bubble-right"></i>
              </a>
            </div>

            <div className="col-lg-5 col-md-6 socialbox">
              <a className="box" href="#">
                  <img
                    src={finalPath + "/images/facebook.png"}
                    alt="facebook"
                  />

                  <h3>Facebook</h3>
                  <span>Sekrety Rozwoju Osobistego</span>

                  <i className="icofont-bubble-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Platform;
