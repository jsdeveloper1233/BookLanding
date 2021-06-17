import React, { useState, useEffect } from "react";
import NavbarSinglePage from "../components/Layouts/NavbarSinglePage";
import Banner from "../components/RadykalnaPrawda/Banner";
import Footer from "../components/Layouts/Footer";
import Funfact from "../components/RadykalnaPrawda/Funfact";
import Download from "../components/RadykalnaPrawda/Download";
import DetailsContent from "../components/RadykalnaPrawda/DetailsContent";
import PricingPlan from "../components/RadykalnaPrawda/PricingPlan";
import Funfact2 from "../components/RadykalnaPrawda/Funfact2";
import Dlaczego from "../components/RadykalnaPrawda/Dlaczego";
import SimpleTextSection from "../components/Features/SimpleTextSection";
import CourseContent from "../components/RadykalnaPrawda/CourseContent";
import OSergio from "../components/RadykalnaPrawda/OSergio";
import LatestProducts from "../components/RadykalnaPrawda/LatestProducts";
import CtaCard from "../components/RadykalnaPrawda/CtaCard";

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
      <div className="radyknalnalanding landing">
        <NavbarSinglePage
          customClass="drogadoszczesciaheader"
          orderButtonText="Zamów książkę"
          orderButtonUrl
        />
        <Banner />
        <Dlaczego />

        <Download />

        <SimpleTextSection
          pText={
            <>
              Gdyby ludzie tworzyli związki ŚWIADOMIE, według narzędzia
              Radykalnej Prawdy w Związku, unikaliby bólu, rozczarowania,
              poczucia niezrozumienia oraz samotności... Usunięcie ze swojego
              życia tych negatywnych zjawisk jest naprawdę możliwe! Czy
              wierzysz, że wykonanie prostego ćwiczenia pozwoli Ci zajrzeć w
              głąb siebie, dostrzec ''prawdziwą twarz'' Twojego partnera/ki i
              zwiększyć szansę na szczęśliwy związek z właściwą osobą, przy
              której będziesz czuć się cudownie każdego dnia? „Radykalna prawda
              w związku©” to przepustka do szczęśliwego związku.
            </>
          }
          theClass="aligncenter jest-cytat background-light-blue"
          sectionClass="background-light-blue"
          insideBlockQuote="background-light-blue"
          // isDividedInTwo
          thereIsNoSideImage
          jestCytat
          cytatAutor="Sergio S Dorje"
        />

        {/* <Funfact /> */}

        <Funfact2 sectionClass="brochure-section"/>

        <CourseContent />

        <SimpleTextSection
          pText={
            <>
              Zacznij żyć pełnią szczęścia w związku <br /> Pomogę Ci to
              osiągnąć!
            </>
          }
          theClass="aligncenter zrobto "
          divClass="row-reverse zacznijzyc "
          isDividedInTwo
          customImage={"/images/radykalna-strona-big.jpg"}
        />

        <LatestProducts />

        <CtaCard />

        <OSergio />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DrogaDoSzczescia;
