import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Checkout/Banner";
import Footer from "../components/Layouts/Footer";
import Pricing from "../components/BookLanding/Pricing";

export const finalPath = "";
class Sklep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paymentSuccess: null };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner title="Sklep" />

        <Pricing />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Sklep;
