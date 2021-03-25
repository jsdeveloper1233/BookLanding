import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/DrogaDoSzczescia/Banner";
import Footer from "../components/Layouts/Footer";
import Funfact from "../components/DrogaDoSzczescia/Funfact";
import Download from "../components/DrogaDoSzczescia/Download";
import DetailsContent from "../components/DrogaDoSzczescia/DetailsContent";
import PricingPlan from "../components/DrogaDoSzczescia/PricingPlan";
import Funfact2 from "../components/DrogaDoSzczescia/Funfact2";
import Dlaczego from "../components/DrogaDoSzczescia/Dlaczego";

export const finalPath = "";
class DrogaDoSzczescia extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="drogadoszczescialanding">
          <Navbar customClass="drogadoszczesciaheader" />
          <Banner />
          <Dlaczego />

          <Download />
          <Funfact />
          <PricingPlan />
          <DetailsContent />

          <Funfact2 />

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default DrogaDoSzczescia;
