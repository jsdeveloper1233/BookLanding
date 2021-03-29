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
import SimpleTextSection from "../components/Features/SimpleTextSection";
import CourseContent from "../components/DrogaDoSzczescia/CourseContent";

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
          <Funfact2 />

          <CourseContent />


          <PricingPlan />

<SimpleTextSection  pText="Zrób to dla siebie i zacznij żyć pełnią szczęścia - pomogę Ci to osiągnąć!" theClass="aligncenter zrobto"/>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default DrogaDoSzczescia;
