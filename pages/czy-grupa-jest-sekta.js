import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from '../components/Checkout/Banner';
import Footer from "../components/Layouts/Footer";
import PrivacyPolicyText from "../components/BookLanding/PrivacyPolicyText";
import NavbarSinglePage from "../components/Layouts/NavbarSinglePage";
import CzyGrupaJestSektaContent from "../components/BookLanding/CzyGrupaJestSektaContent";
import BuyCzyGrupaJestSekta from "../components/BookLanding/BuyCzyGrupaJestSekta";


export const finalPath = "";
class CzyGrupaJestSekta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paymentSuccess:null};
}

  render() {
    return (
    
      <React.Fragment>
         <NavbarSinglePage />
         <Banner title="Czy dana grupa jest sektą?" />
         <BuyCzyGrupaJestSekta />
        <CzyGrupaJestSektaContent />

        <Footer />
      </React.Fragment>
      
    );
  }
}

export default CzyGrupaJestSekta;
