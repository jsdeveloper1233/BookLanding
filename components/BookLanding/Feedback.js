import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(()=>import("react-owl-carousel3"));
import { finalPath } from "../../pages/index";

import {default as NextLink}  from "next/link";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import ExpandText from "./ExpandText";
import Image from 'next/image'
const imagesToPublish = ["/images/feedbacks/feedback-0.jpg", "/images/feedbacks/feedback-1.jpg", "/images/feedbacks/feedback-2.jpg", "/images/feedbacks/feedback-3.jpg" ];
const FeedBackScreenshots = ({imagesArr}) => {
  const imgs = imagesArr.map((image, index) => {
    return (
      <div className="feedback-image-page1">
        <Image layout='fill'  src={finalPath + image} alt={`opinia o książce ${index}` } key={index} />
      </div>
    )
  })
return imgs;
}

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
          <p className="mw-100p">
            Zobacz, co o książce „Sekrety Rozwoju Osobistego” mówią ci, którzy już ją przeczytali.
          </p>
          <p>
            Już przeczytana?{" "}
            <NextLink href="/opinie">
              <a>Zostaw opinię.</a>
            </NextLink>
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
      <div className="container feedbacks-screenshots">
        <div className="feedback-0-image-page1">
          <Image layout='fill'  src={finalPath + '/images/feedbacks/feedback-0.jpg'} alt={`opinia o książce 0` }  />
        </div>
        <div className="feedback-1-image-page1">
          <Image layout='fill'  src={finalPath + '/images/feedbacks/feedback-1.jpg'} alt={`opinia o książce 1` }  />
        </div>
        <div className="feedback-2-image-page1">
          <Image layout='fill'  src={finalPath + '/images/feedbacks/feedback-2.jpg'} alt={`opinia o książce 2` }  />
        </div>
        <div className="feedback-3-image-page1">
          <Image layout='fill'  src={finalPath + '/images/feedbacks/feedback-3.jpg'} alt={`opinia o książce 3` }  />
        </div>
      </div>
      <div className="text-center">


      <Link
                        className="btn btn-primary mt-5"
                        href="#kupteraz"
                        to="kupteraz"
                        spy={true}
                        smooth={true}
                        duration={500}
                        // onSetActive={this.handleSetActive}
                      >
                        Biorę to!
            </Link>
                  </div>
    </section>
  );
};

export default Feedback;
