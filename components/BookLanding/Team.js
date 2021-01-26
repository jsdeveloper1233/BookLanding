import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { finalPath } from "../../pages/index";

const options = {
  loop: false,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  dots: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

class Team extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="team-area ptb-100 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Our Smart Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="team-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <img
                      src={finalPath + "/images/team-sergio.jpg"}
                      alt="Sergio"
                    />

                    <div className="team-content">
                      <h3>Sergio S Dorje</h3>
                      <span>Autor</span>

                      <ul>
                        <li>
                          <Link
                            href="https://www.facebook.com/sergiosdorje/"
                            target="_blank"
                            rel="noopener"
                          >
                            <a className="facebook">
                              <i className="icofont-facebook"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/sergiosdorje/"
                            target="_blank"
                            rel="noopener"
                          >
                            <a className="instagram">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <img src={finalPath + "/images/team-wojtek.jpeg"} alt="Wojtek" />

                    <div className="team-content">
                      <h3>Wojtek Pitala</h3>
                      <span>Współpraca literacka</span>


                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <img src={finalPath + ""} alt="team" />

                    <div className="team-content">
                      <h3>Nikola Hahn</h3>
                      <span>Ilustracja / Projekt okładki</span>

                      <ul>
                        <li>
                          <Link href="https://www.instagram.com/nikolahahn/">
                            <a className="instagram">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <img src={finalPath + "/images/team-maja.png"} alt="Maja" />

                    <div className="team-content">
                      <h3>Maja Strzelecka</h3>
                      <span>Copywriting LP</span>

                      <ul>
                        <li>
                          <Link href="https://www.instagram.com/content_lady/">
                            <a className="instagram">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

             
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
