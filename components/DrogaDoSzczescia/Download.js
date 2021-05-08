import React from "react";
// import Link from "next/link";
import YoutubeEmbed from "../Features/YoutubeEmbed";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
class Download extends React.Component {
  render() {
    const {disable} = this.props;
    return (
      <section className="app-download ptb-100 bg-gray">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Zapisz się teraz</h2>
                <div className="bar"></div>
                <p>
                Intensywny program rozwojowy “Droga do szczęścia’’ będzie Twoim najlepszym przyjacielem, który rozwija Cię, wspiera, pomaga być lepszym człowiekiem i chce dla Ciebie wszystkiego, co najlepsze.
                </p>

                {/* <div className="download-btn"> */}

                <button disabled={disable} className={`btn btn-primary order-btn ${
                    disable ? "btn-disabled" : ""
                  }`}>
                  <Link
                        className=""
                        to="pakiety"
                        href="#pakiety"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >ZAPISZĘ SIĘ!
                      </Link>
                </button>

                
                  {/* <Link href="/">
                    <a>
                      <i className="icofont-brand-android-robot"></i> Available
                      On <span>Google Store</span>
                    </a>
                  </Link> */}
                {/* </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12 wherevideois">
              <div className="download-image">


                {/* <img src='/images/app-img1.png' alt="image" />
                                <img src='/images/app-img2.png' alt="image" /> */}
                <div className="laptop-video">
                  <div>
                  <YoutubeEmbed embedId="EbnH3VHzhu8?autoplay=1&modestbranding=1&showinfo=0&rel=0&color=white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Download;
