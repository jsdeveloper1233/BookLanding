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
              <h2>Obserwuj Autora w social</h2>
            </div>


            <div className="col-lg-4 col-md-6 socialbox">
              <Link href="https://www.instagram.com/sergiosdorje/" target="_blank" rel="noopener">
                <a className="box">
                  <img
                    src={finalPath + "/images/instagram.png"}
                    alt="instagram"
                  />

                  <h3>Instagram</h3>
                  <span>Sergio S Dorje</span>

                  <i className="icofont-bubble-right"></i>
                </a>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 socialbox">
              <Link href="#">
                <a className="box">
                  <img
                    src={finalPath + "/images/instagram.png"}
                    alt="instagram"
                  />

                  <h3>Instagram</h3>
                  <span>Sekrety Rozwoju Osobistego</span>

                  <i className="icofont-bubble-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Platform;
