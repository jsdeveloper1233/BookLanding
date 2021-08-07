import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { finalPath } from "../../pages/index";
import Image from 'next/image'
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
            <h2>To oni pomagali przy powstawaniu książki!</h2>
            <div className="bar"></div>
            <p>
              Poznaj osoby, które wspierały mnie podczas tworzenia mojego
              dzieła. Bez nich byłoby bardzo trudno.<br />
              Z całego serca dziękuję, że
              byliście!
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
                    <div className="single-team-member-box-team-image">
                      <Image
                        layout='fill'
                        src={finalPath + "/images/team-sergio.jpg"}
                        alt="Sergio"
                      />
                    </div>

                    <div className="team-content">
                      <h3>
                        Sergio
                        <br /> S Dorje
                      </h3>
                      <span>Autor</span>

                      <ul>
                        <li>
                          <a
                            className="facebook"
                            href="https://www.facebook.com/sergiosdorje/"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="instagram"
                            href="https://www.instagram.com/sergiosdorje/"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <div className="single-team-member-box-team-image">
                      <Image
                        layout='fill'
                        src={finalPath + "/images/team-wojtek.jpeg"}
                        alt="Wojtek"
                      />
                    </div>

                    <div className="team-content">
                      <h3>
                        Wojtek
                        <br /> Pitala
                      </h3>
                      <span>Współpraca literacka</span>
                      <ul>
                        <li>
                          <a className="instagram hidden-instagram-icon">
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <div className="single-team-member-box-team-image">
                      <Image
                        layout='fill'
                        src={finalPath + "/images/lucjan-wesolowski.jpg"}
                        alt="Lucjan"
                      />
                    </div>

                    <div className="team-content">
                      <h3>
                        Lucjan
                        <br /> Wesołowski
                      </h3>
                      <span>Kolejna redakcja i korekta</span>

                      <ul>
                        <li>
                          <a
                            className="facebook"
                            href="https://www.facebook.com/lucjan.wesolowski"
                            target="_blank"
                            rel="noopener"
                          >
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <div className="single-team-member-box-team-image">
                      <Image
                        layout='fill'
                        src={finalPath + "/images/NikolaHahn_2020_S_Sergio.png"}
                        alt="team"
                      />
                    </div>

                    <div className="team-content">
                      <h3>
                        Nikola
                        <br /> Hahn
                      </h3>
                      <span>Ilustracja / Projekt okładki</span>

                      <ul>
                        <li>
                          <a
                            className="instagram"
                            href="https://www.instagram.com/nikolahahn/"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <div className="single-team-member-box-team-image">
                      <Image
                        layout='fill'
                        src={finalPath + "/images/team-mireli.jpg"}
                        alt="team"
                      />
                    </div>

                    <div className="team-content">
                      <h3>
                      Mireli
                        <br /> Production
                      </h3>
                      <span>Film promujacy ksiazkę</span>

                      <ul>
                        <li>
                          <a
                            className="instagram"
                            href="https://www.instagram.com/mireliproduction/"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-team-member-box">
                    <div className="single-team-member-box-team-image">
                      <Image layout='fill' src={finalPath + "/images/team-maja.png"} alt="Maja" />
                    </div>

                    <div className="team-content">
                      <h3>
                        Maja
                        <br /> Strzelecka
                      </h3>
                      <span>Copywriting na stronę www</span>

                      <ul>
                        <li>
                          <a
                            className="instagram"
                            href="https://www.instagram.com/content_lady/"
                          >
                            <i className="icofont-instagram"></i>
                          </a>
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
