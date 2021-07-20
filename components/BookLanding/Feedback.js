import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { finalPath } from "../../pages/index";
import Link from "next/link";
import ExpandText from "./ExpandText";


const options = {
  loop: false,
  rewind: true,
  items:3,
  startPosition:1,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
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
    1200: {
      items: 3,
    },
  },
};

const Feedback = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  });

  return (
    <section className="feedback-area ptb-100 bg-gray move" id="references">
      <div className="container" itemProp="mainEntity" itemScope itemType="https://schema.org/Book">
        <div className="section-title">
          <h2>Opinie i recenzje</h2>
          <div className="bar"></div>
          <p>
            Zobacz, co o książce „Sekrety Rozwoju Osobistego” mówią ci, którzy
            już ją przeczytali.
          </p>
          <p>
            Już przeczytana?{" "}
            <Link href="/opinie">
              <a>Zostaw opinię.</a>
            </Link>
          </p>
        </div>

        <div className="row">
          {display ? (
            <OwlCarousel
              className="feedback-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="col-lg-12">
                <div className="single-feedback-box">
                  <div className="client-info">
                    <img src={finalPath + "/images/client1.jpg"} alt="client" />
                    <h3>Alit John</h3>
                    <span>Web Developer</span>
                  </div>
                  <p>
                    <ExpandText maxLength={150} text={"Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."} />
                  </p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-feedback-box">
                  <div className="client-info">
                    <img src={finalPath + "/images/client2.jpg"} alt="client" />
                    <h3>Alit John</h3>
                    <span>SEO Expert</span>
                  </div>
                  <p>
                  <ExpandText maxLength={150} text={"Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glancePlan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glancePlan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glancePlan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."} />
                  </p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-feedback-box">
                  <div className="client-info">
                    <img src={finalPath + "/images/client3.jpg"} alt="client" />
                    <h3>Steven John</h3>
                    <span>Web Developer</span>
                  </div>
                  <p>
                  <ExpandText maxLength={150} text={"Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."} />
                  </p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="single-feedback-box">
                  <div className="client-info">
                    <img src={finalPath + "/images/client4.jpg"} alt="client" />
                    <h3>David Warner</h3>
                    <span>Web Developer</span>
                  </div>
                  <p>
                  <ExpandText maxLength={150} text={"Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."} />
                  </p>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>

      <svg
        className="svg-feedback-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff" />
      </svg>
    </section>
  );
};

export default Feedback;
