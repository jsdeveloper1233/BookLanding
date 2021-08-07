import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/BookLanding/Banner";
import Partner from "../components/BookLanding/Partner";
import OAutorze from "../components/BookLanding/OAutorze";
import Discover2 from "../components/BookLanding/Discover2";

import Features from "../components/BookLanding/Features";
// import Funfact from '../components/BookLanding/Funfact';
import Screenshot from "../components/BookLanding/Screenshot";
import Team from "../components/BookLanding/Team";
import Pricing from "../components/BookLanding/Pricing";
import Feedback from "../components/BookLanding/Feedback";
import Blog from "../components/BookLanding/Blog";
import Platform from "../components/BookLanding/Platform";
import Subscribe from "../components/Shared/Subscribe";
import FaqContent from "../components/Faq/FaqContent";
import BlogOne from "../components/Blog/BlogOne";
import AboutContent from "../components/BookLanding/AboutContent";
import Wartosci from "../components/BookLanding/Wartosci";
import Overview from "../components/BookLanding/Overview";
import Services from "../components/DigitalMarketing/Services";
import VirtualReality from "../components/BookLanding/VirtualReality";
import CtaCard from "../components/BookLanding/CtaCard";
import Pricing2 from "../components/BookLanding/Pricing2";
const VideoComp = dynamic(()=>import('../components/BookLanding/VideoComp'))
import Head from "next/head";
export const finalPath = "";
class BookLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paymentSuccess: null };
  }
  // componentDidMount() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const myParam = urlParams.get('paymentSuccess');
  //   if(myParam == "true"){
  //     this.setState({paymentSuccess: true})
  //     alert("Payment Success, You'll recieve an email with the instructions")
  //   }
  // }
  render() {
    return (
      <>
        <React.Fragment>
          <Head>
            <title>
              Sekrety Rozwoju Osobistego - Książką - Medytacja, joga, energia,
              seks, tantra.
            </title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta
              name="description"
              content="Sekrety Rozwoju Osobistego - Książka o medytacji, książka o tantrze, jodze, seksie i o energii. Autor: Sergio S Dorje"
            />
            <meta property="og:type" content="book"></meta>
            <meta
              name="og:title"
              property="og:title"
              content="Sekrety Rozwoju Osobistego - Książką - Medytacja, joga, energia, seks, tantra."
            ></meta>
            <meta property="og:locale" content="pl"></meta>
            <meta
              property="og:url"
              content="https://www.sekretyrozwojuosobistego.pl"
            ></meta>
            <meta
              property="og:image"
              content="https://www.sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-mkp-sm.png"
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
            <meta property="book:isbn" content="978-83-960230-1-8"></meta>
            <meta property="book:release_date" content="2021-08-01"></meta>
            <meta property="book:tag" content="Sergio S Dorje"></meta>
            <meta property="book:tag" content="książka"></meta>
            <meta property="book:tag" content="tantra"></meta>
            <meta property="book:tag" content="medytacja"></meta>
            <meta property="book:tag" content="seks"></meta>
            <meta property="book:tag" content="joga"></meta>
            <meta property="book:tag" content="energia"></meta>
            <meta property="book:tag" content="ebook"></meta>
            <meta property="book:tag" content="książka"></meta>
            <meta
              name="twitter:card"
              content="Sekrety Rozwoju Osobistego - Książką - Medytacja, joga, energia, seks, tantra."
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
                  name: "Sekrety rozwoju osobistego. Medytacja, joga, energia, seks, tantra.",
                  author: {
                    "@type": "Person",
                    name: "Sergio S Dorje",
                    sameAs: [
                      "https://www.anahatatantra.com/pl/",
                      "https://www.sergiosdorje.com/",
                    ],
                  },
                  bookFormat: "https://schema.org/Paperback",
                  datePublished: "2021-08-01",
                  image:
                    "https://sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-mkp-sm.png",
                  inLanguage: "Polish",
                  isbn: "978-83-960230-1-8",
                  numberOfPages: "224",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    price: "39.90",
                    priceCurrency: "PLN",
                  },
                  // review: [
                  //   {
                  //     "@type": "Review",
                  //     author: "John Doe",
                  //     datePublished: "2021-07-30",
                  //     name: "A masterpiece of literature",
                  //     reviewBody:
                  //       "I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.",
                  //     reviewRating: {
                  //       "@type": "Rating",
                  //       ratingValue: "5",
                  //     },
                  //   },
                  //   {
                  //     "@type": "Review",
                  //     author: "Bob Smith",
                  //     datePublished: "2021-07-30",
                  //     name: "A good read.",
                  //     reviewBody:
                  //       "Catcher in the Rye is a fun book. It's a good book to read.",
                  //     reviewRating: {
                  //       "@type": "Rating",
                  //       ratingValue: "5",
                  //     },
                  //   },
                  // ],
                  // aggregateRating: {
                  //   "@type": "AggregateRating",
                  //   reviewCount: "2",
                  //   ratingValue: "5",
                  //   bestRating: "5",
                  //   worstRating: "5",
                  // },
                  potentialAction: {
                    "@type": "ReadAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.sekretyrozwojuosobistego.pl/checkout?product=paperCopy",
                      actionPlatform: [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/AndroidPlatform",
                        "http://schema.org/IOSPlatform",
                      ],
                    },
                  },
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
                  datePublished: "2021-08-01",
                  image:
                    "https://sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-mkp-sm.png",
                  inLanguage: "Polish",
                  isbn: "978-83-960230-3-2",
                  numberOfPages: "224",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    price: "38.90",
                    priceCurrency: "PLN",
                  },
                  // review: [
                  //   {
                  //     "@type": "Review",
                  //     author: "John Doe",
                  //     datePublished: "2021-07-30",
                  //     name: "A masterpiece of literature",
                  //     reviewBody:
                  //       "I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.",
                  //     reviewRating: {
                  //       "@type": "Rating",
                  //       ratingValue: "5",
                  //     },
                  //   },
                  //   {
                  //     "@type": "Review",
                  //     author: "Bob Smith",
                  //     datePublished: "2021-07-30",
                  //     name: "A good read.",
                  //     reviewBody:
                  //       "Catcher in the Rye is a fun book. It's a good book to read.",
                  //     reviewRating: {
                  //       "@type": "Rating",
                  //       ratingValue: "5",
                  //     },
                  //   },
                  // ],
                  // aggregateRating: {
                  //   "@type": "AggregateRating",
                  //   reviewCount: "2",
                  //   ratingValue: "5",
                  //   bestRating: "5",
                  //   worstRating: "5",
                  // },
                  potentialAction: {
                    "@type": "ReadAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.sekretyrozwojuosobistego.pl/checkout?product=ebook",
                      actionPlatform: [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/AndroidPlatform",
                        "http://schema.org/IOSPlatform",
                      ],
                    },
                  },
                }),
              }}
            />
            {/* Video Start */}
            <script
              type="application/ld+json" dangerouslySetInnerHTML=
              {{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "VideoObject",
                  name: 'Zwiastuń książki "Sekrety rozwoju osobistego"',
                  description:
                    'Zwiastuń książki "Sekrety rozwoju osobistego" z 2021 r.',
                  thumbnailUrl: [
                    "https://sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-1x1.jpg",
                    "https://sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-4x3.jpg",
                    "https://sekretyrozwojuosobistego.pl/images/sekrety-rozwoju-osobistego-16x9.jpg",
                  ],
                  uploadDate: "2021-05-14T08:00:00+08:00",
                  duration: "PT2M26S",
                  contentUrl: "https://www.youtube.com/watch?v=exHgJ528eYI",
                  embedUrl: "https://www.youtube.com/embed/exHgJ528eYI",
                }),
              }}
              
            />
          </Head>
          <Navbar />
          <Banner />
          <AboutContent />
          <VideoComp />
          <Discover2 />
          <Features />
          <CtaCard />
          <VirtualReality />
          <Screenshot />
          <Team />
          <Pricing2 />
          <Feedback />
          <OAutorze />
          <Platform />
          <FaqContent />
          <Subscribe />
          <Footer />
        </React.Fragment>
      </>
    );
  }
}

export default BookLanding;
