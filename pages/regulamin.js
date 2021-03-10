import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from '../components/Checkout/Banner';
import Footer from "../components/Layouts/Footer";
import RegulaminText from "../components/BookLanding/RegulaminText";


export const finalPath = "";
class Regulamin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paymentSuccess:null};
}

  render() {
    return (
    
      <React.Fragment>
         <Navbar />
         <Banner title="Regulamin" />
        <RegulaminText />

        <Footer />
      </React.Fragment>
      
    );
  }
}

export default Regulamin;
