import React from "react";
// import Link from "next/link";
import YoutubeEmbed from "../Features/YoutubeEmbed";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { default as NextLink } from "next/link";
import Image from 'next/image'
class Download extends React.Component {
  render() {
    const {disable} = this.props;
    return (
      <section className="app-download ptb-100 bg-gray unikaj-cierpienia">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center tobeflex">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Unikaj cierpienia</h2>
                <div className="bar"></div>
                <p>
                Dzięki narzędziu "Radykalna prawda w związku©" uniknj cierpienia oraz zrealizuj swoje marzenia o związku pełnym miłości, zrozumienia i akceptacji!
                </p>

                {/* <div className="download-btn"> */}

                <button disabled={disable} className={`btn btn-primary order-btn ${
                    disable ? "btn-disabled" : ""
                  }`}>
                  {/* <Link
                        className=""
                        // to="ceny"
                        href="/checkout?product=radykalnaEbook"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >ZAMAWIAM NARZĘDZIE!
                      </Link> */}
                      <NextLink href="/checkout?product=radykalnaEbook">
                        {/* <a className="btn btn-primary"> */}
                        ZAMAWIAM NARZĘDZIE!
                        {/* </a> */}
                      </NextLink>
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
              <div className="couple-s-image">
                <Image layout='fill' className="couple-image" src='/images/couple-s.jpg' alt="para związek" />
              </div>
              <div className="download-image">


                {/* <img src='/images/app-img1.png' alt="image" />
                                <img src='/images/app-img2.png' alt="image" /> */}


                {/* <div className="laptop-video">
                  <div>
                  <YoutubeEmbed embedId="EbnH3VHzhu8?autoplay=1&modestbranding=1&showinfo=0&rel=0&color=white" />
                  
                   
                  </div>
                </div> */}


              </div>
            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default Download;
