import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from '../components/Checkout/Banner';
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyText from "../components/BookLanding/PrivacyPolicyText";
import NavbarSinglePage from "../components/Layouts/NavbarSinglePage";


export const finalPath = "";
class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paymentSuccess:null};
}

  render() {
    return (
    
      <React.Fragment>
         <NavbarSinglePage />
         <Banner title="Polityka Prywatności" />
        <PrivacyPolicyText />

        <Footer />
      </React.Fragment>
      
    );
  }
}

export default PrivacyPolicy;
