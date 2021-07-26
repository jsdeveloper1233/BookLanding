import React, { useState, useEffect } from "react";
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
import { useRouter } from 'next/router'
import Custom404 from "./404";
import Subscribe from "../components/Shared/Subscribe";

export const finalPath = "";
// const singleText = {<>Zrób to dla siebie i zacznij żyć pełnią szczęścia <br /> Pomogę Ci to osiągnąć!.</>};
// const singleText = [
//   "Zrób to dla siebie i zacznij żyć pełnią szczęścia",
//   <br />,
//   "Pomogę Ci to osiągnąć!",
// ];

const DrogaDoSzczescia = () => {
  const [disable, setDisable] = useState(true);

  const router = useRouter()  
  const { authorized } = router.query

  useEffect(() => {
    setDisable(true);
  }, []);

 

  return (
    <>
   { authorized === "true" && <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: 'Program "Droga do szczęścia" - Kurs',
            description:
              "“Droga do szczęścia” to intensywny, 11-dniowy program rozwojowy, dzięki któremu możesz stworzyć dla siebie rzeczywistość, o jakiej marzysz od zawsze. Stań się autorem swojego własnego szczęścia.",
            provider: {
              "@type": "Person",
              name: "Sergio S Dorje",
            },
          }),
        }}
      />
      
      <div className="drogadoszczescialanding landing">
        <NavbarSinglePage customClass="drogadoszczesciaheader" />

        <Banner disable={disable} />
        <Dlaczego />
        <Download disable={disable} />
        <Funfact />
        <Funfact2 disable={disable} />
        <CourseContent />
        <PricingPlan />
        <SimpleTextSection
          pText={
            <>
              Zrób to dla siebie i zacznij żyć pełnią szczęścia <br /> Pomogę Ci
              to osiągnąć!
            </>
          }
          theClass="aligncenter zrobto"
          isDividedInTwo
        />
        <Subscribe group="108027394" />
        <Footer />
      </div>
      </>
}
      
      {authorized !== "true" && 
       <div className="drogadoszczescialanding landing">
          <NavbarSinglePage customClass="drogadoszczesciaheader" />
       <NavbarSinglePage customClass="drogadoszczesciaheader" />
       <Custom404 />
       <Footer />
      </div>
       }
    </>
  );
};

export default DrogaDoSzczescia;
