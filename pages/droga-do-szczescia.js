import React, {useState, useEffect} from "react";
import NavbarSinglePage from "../components/Layouts/NavbarSinglePage";
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
// const singleText = {<>Zrób to dla siebie i zacznij żyć pełnią szczęścia <br /> Pomogę Ci to osiągnąć!.</>};
// const singleText = [
//   "Zrób to dla siebie i zacznij żyć pełnią szczęścia",
//   <br />,
//   "Pomogę Ci to osiągnąć!",
// ];

const DrogaDoSzczescia = () => {

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(true);
  }, []);


  return (
    <React.Fragment>
      <div className="drogadoszczescialanding">
        <NavbarSinglePage customClass="drogadoszczesciaheader" />
        <Banner disable={disable}/>
        <Dlaczego />

        <Download disable={disable} />
        <Funfact />
        <Funfact2 disable={disable} />

        <CourseContent />

        <PricingPlan />

        <SimpleTextSection
          pText={<>Zrób to dla siebie i zacznij żyć pełnią szczęścia <br /> Pomogę Ci to osiągnąć!</>}
          theClass="aligncenter zrobto"
          isDividedInTwo
        />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DrogaDoSzczescia;
