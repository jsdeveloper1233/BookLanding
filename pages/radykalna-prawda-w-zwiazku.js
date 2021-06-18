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
import Head from "next/head";

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
               <Head>
            <title>
              Radykalna prawda w związku
            </title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta
              name="description"
              content="Radykalna prawda w związku. Narędzie, który pomaga w tworzeniu zdrowych związków. Autor: Sergio S Dorje"
            />
            <meta property="og:type" content="book"></meta>
            <meta
              name="og:title"
              property="og:title"
              content="Radykalna prawda w związku"
            ></meta>
            <meta property="og:locale" content="pl"></meta>
            <meta
              property="og:url"
              content="https://www.sekretyrozwojuosobistego.pl"
            ></meta>
            <meta
              property="og:image"
              content="https://www.sekretyrozwojuosobistego.pl/images/radykalna-s.png"
            ></meta>{" "}
            //tofix
            <meta
              property="og:image:secure_url"
              content="https://www.sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-mkp-sm.png"
            ></meta>
            <meta property="og:image:width" content="50"></meta>
            <meta property="og:image:height" content="50"></meta>
            <meta property="og:image:type" content="image/png"></meta>
            <meta property="book:author" content="Sergio S Dorje"></meta>
            <meta property="book:isbn" content="978-83-960230-2-5"></meta>
            <meta property="book:release_date" content="2021-08-01"></meta>
            <meta property="book:tag" content="Sergio S Dorje"></meta>
            <meta property="book:tag" content="radykalna"></meta>
            <meta property="book:tag" content="prawda"></meta>
            <meta property="book:tag" content="związku"></meta>
            <meta property="book:tag" content="relacje"></meta>
            <meta property="book:tag" content="rodzina"></meta>
            <meta property="book:tag" content="ebook"></meta>
            <meta property="book:tag" content="książka"></meta>
            <meta
              name="twitter:card"
              content="Radykalna prawda w związku"
            ></meta>
            <link rel="profile" href="//gmpg.org/xfn/11" />
            <meta name="robots" content="index, follow" />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "Book",
                  publisher: "Anahata Bliss",
                  url: "https://sekretyrozwojuosobistego.pl/",
                  name: "Radykalna prawda w związku",
                  author: {
                    "@type": "Person",
                    name: "Sergio S Dorje",
                    sameAs: [
                      "https://www.anahatatantra.com/pl/",
                      "https://www.sergiosdorje.com/",
                    ],
                  },
                  bookFormat: "http://schema.org/EBook",
                  datePublished: "2021-04-01",
                  image: "https://sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-mkp-sm.png",
                  inLanguage: "Polish",
                  isbn: "978-83-960230-2-5",
                  numberOfPages: "44",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    price: "16.90",
                    priceCurrency: "PLN",
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "author": "John Doe",
                      "datePublished": "2006-05-04",
                      "name": "A masterpiece of literature",
                      "reviewBody": "I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.",
                      "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                   }
                    },
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "reviewCount": "1",
                    ratingValue: "5",
                    bestRating: "5",
                    worstRating: "5"
                  },
                  "potentialAction": {
                    "@type": "ReadAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://sekretyrozwojuosobistego.pl/radykalna-prawda-w-zwiazku",
                      "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/AndroidPlatform",
                        "http://schema.org/IOSPlatform"
                      ]
                    },
                  }
                }),
              }}
            />

{/* // Ebook start */}
<script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "Book",
                  publisher: "Anahata Bliss",
                  url: "https://sekretyrozwojuosobistego.pl/",
                  name: "Sekrety rozwoju osobistego. Medytacja, joga, energia, seks, tantra.",
                  author: {
                    "@type": "Person",
                    name: "Sergio S Dorje",
                    sameAs: [
                      "https://www.anahatatantra.com/pl/",
                      "https://www.sergiosdorje.com/",
                    ],
                  },
                  bookFormat: "http://schema.org/EBook",
                  datePublished: "2021-04-01",
                  image: "https://sekretyrozwojuosobistego.pl//images/sekrety-rozwoju-osobistego-mkp-sm.png",
                  inLanguage: "Polish",
                  isbn: "978-83-960230-3-2",
                  numberOfPages: "224",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    price: "38.90",
                    priceCurrency: "PLN",
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "author": "John Doe",
                      "datePublished": "2006-05-04",
                      "name": "A masterpiece of literature",
                      "reviewBody": "I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.",
                      "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                   }
                    },
                    {
                      "@type": "Review",
                      "author": "Bob Smith",
                      "datePublished": "2006-06-15",
                      "name": "A good read.",
                      "reviewBody": "Catcher in the Rye is a fun book. It's a good book to read.",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                       }
                    },
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "reviewCount": "2",
                    ratingValue: "5",
                    bestRating: "5",
                    worstRating: "5"
                  },
                    "potentialAction": {
                    "@type": "ReadAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.sekretyrozwojuosobistego.pl/checkout?product=ebook",
                      "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/AndroidPlatform",
                        "http://schema.org/IOSPlatform"
                      ]
                    },
                  }
                }),
              }}
            />

          </Head>
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
