import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/BookLanding/Banner";
import Partner from "../components/BookLanding/Partner";
import Discover from "../components/BookLanding/Discover";
import Features from "../components/BookLanding/Features";
// import Funfact from '../components/BookLanding/Funfact';
import Screenshot from "../components/BookLanding/Screenshot";
import Team from "../components/BookLanding/Team";
import Pricing from "../components/BookLanding/Pricing";
import Feedback from "../components/BookLanding/Feedback";
import Blog from "../components/BookLanding/Blog";
import Platform from "../components/BookLanding/Platform";
import Subscribe from "../components/BookLanding/Subscribe";
import FaqContent from "../components/Faq/FaqContent";
import BlogOne from "../components/Blog/BlogOne";
import AboutContent from "../components/BookLanding/AboutContent";
import Wartosci from "../components/BookLanding/Wartosci";

export const finalPath = "";
class BookLanding extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <AboutContent />
        <Discover />
        <Wartosci />
        <Features />
        {/* <Funfact /> */}
        <Screenshot />
        <Team />
        <Pricing />
        <Feedback />
        <Blog />
        <Subscribe />
        <FaqContent />
        <Platform />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookLanding;
