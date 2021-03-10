import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/BookLanding/Banner";
import Partner from "../components/BookLanding/Partner";
import OAutorze from "../components/BookLanding/OAutorze";
import Discover2 from "../components/BookLanding/Discover2";

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
import Overview from "../components/BookLanding/Overview";
import Services from "../components/DigitalMarketing/Services";
import VirtualReality from "../components/BookLanding/VirtualReality";
import CtaCard from "../components/BookLanding/CtaCard";
import Pricing2 from "../components/BookLanding/Pricing2";


export const finalPath = "";
class BookLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paymentSuccess: null };
  }
  // componentDidMount() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const myParam = urlParams.get('paymentSuccess');
  //   if(myParam == "true"){
  //     this.setState({paymentSuccess: true})
  //     alert("Payment Success, You'll recieve an email with the instructions")
  //   }
  // }
  render() {
    return (
      <>

        <React.Fragment>
          <Navbar />
          <Banner />
          <AboutContent />
          <Discover2 />
          <Features />
          <CtaCard />
          <VirtualReality />
          <Screenshot />
          <Team />
          <Pricing2 />
          <Feedback />
          <OAutorze />
          <Platform />
          <FaqContent />
          <Subscribe />
          <Footer />
        </React.Fragment>
      </>
    );
  }
}

export default BookLanding;
