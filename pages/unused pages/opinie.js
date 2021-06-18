import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from '../components/Checkout/Banner';
import Footer from "../components/Layouts/Footer";
import RegulaminText from "../components/BookLanding/RegulaminText";
import NavbarSinglePage from "../components/Layouts/NavbarSinglePage";
import LeaveAReview from "../components/BookLanding/LeaveAReview";
import Feedback from "../components/BookLanding/Feedback";


export const finalPath = "";
class Opinie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paymentSuccess:null};
}

  render() {
    return (
    
      <React.Fragment>
         <Navbar />
         <Banner title="Opinie i recenzje" />
         <LeaveAReview limit={150} value="" />
         <Feedback />

        <Footer />
      </React.Fragment>
      
    );
  }
}

export default Opinie;
