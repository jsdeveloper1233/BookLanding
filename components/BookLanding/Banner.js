import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { finalPath } from "../../pages/index";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Banner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="main-banner book-home"
          style={{
            backgroundImage: `url(${finalPath} + /images/book-banner.jpg)`,
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content">
                      <span>Autor: Sergio S Dorje</span>
                      <h1>Sekrety Rozwoju Osobistego</h1>
                      <p>
                        Medytacja, joga, energia, seks, tantra. Odkryj prawdy, o
                        których nikt nie mówi.
                      </p>
             
                      {/* <Link href="#"> */}
                      <Link
                        className="btn btn-primary"
                        to="kupteraz"
                        href="#kupteraz"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >
                        ZAMÓW TERAZ
                      </Link>
                      {/* </Link> */}
                      {/* <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                          className="video-btn popup-youtube"
                        >
                          Obejrzyj zwiastun
                          <i className="icofont-play-alt-3"></i>
                        </a>
                      </Link> */}
                      <em className="inlucdebooks">
                        * eBook zawiera wersje MOBI, EPUB i PDF
                      </em>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="book-image">
                      <img
                        src={finalPath + "/images/sekrety-rozwoju-osobistego-mkp-sm.png"}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="creative-shape">
            <img src={finalPath + "/images/bg3.png"} alt="bg" />
          </div>
          <div className="bg-gray shape-1"></div>
          <div className="shape1">
            <img src={finalPath + "/images/shape1.png"} alt="img" />
          </div>
          <div className="shape2">
            <img src={finalPath + "/images/shape2.png"} alt="img" />
          </div>
          <div className="shape3">
            <img src={finalPath + "/images/shape3.png"} alt="img" />
          </div>
          <div className="shape6">
            <img src={finalPath + "/images/shape6.png"} alt="img" />
          </div>
          <div className="shape8 rotateme">
            <img src={finalPath + "/images/shape8.svg"} alt="shape" />
          </div>
          <div className="shape9">
            <img src={finalPath + "/images/shape9.svg"} alt="shape" />
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default Banner;
