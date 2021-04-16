import "../public/css/bootstrap.min.css";
import "../public/css/icofont.min.css";
import "../public/css/animate.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "react-image-lightbox/style.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.scss";
import "../public/css/responsive.css";

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/reducers/cartReducer";

import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";
import Router from "next/router";
import withAnalytics from "next-analytics";

  const  MyApp = props =>  {
      const { Component, pageProps, store } = props;


      return (
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
              content="http://examples.opengraphprotocol.us/media/images/50.png"
            ></meta>{" "}
            //tofix
            <meta
              property="og:image:secure_url"
              content="https://d72cgtgi6hvvl.cloudfront.net/media/images/50.png"
            ></meta>
            <meta property="og:image:width" content="50"></meta>
            <meta property="og:image:height" content="50"></meta>
            <meta property="og:image:type" content="image/png"></meta>

            <meta property="book:author" content="Sergio S Dorje"></meta>
            <meta property="book:isbn" content="XXXXXXXXXXXXXXXXXXXX"></meta>
            <meta property="book:release_date" content="2011-10-24"></meta>
            <meta property="book:tag" content="Sergio S Dorje"></meta>
            <meta property="book:tag" content="książka"></meta>
            <meta property="book:tag" content="tantra"></meta>
            <meta property="book:tag" content="medytacja"></meta>
            <meta property="book:tag" content="seks"></meta>
            <meta property="book:tag" content="joga"></meta>
            <meta property="book:tag" content="energia"></meta>
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
                  name:
                    "Sekrety rozwoju osobistego. Medytacja, joga, energia, seks, tantra.",
                  author: {
                    "@type": "Person",
                    name: "Sergio S Dorje",
                    sameAs: [
                      "https://www.anahatatantra.com/pl/",
                      "https://www.sergiosdorje.com/",
                    ],
                  },
                  bookFormat: "https://schema.org/Paperback",
                  datePublished: "2021-04-01",
                  image: "catcher-in-the-rye-book-cover.jpg",
                  inLanguage: "Polish",
                  isbn: "978-83-960230-1-8",
                  numberOfPages: "224",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    price: "38",
                    priceCurrency: "PLN",
                  },
                }),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "AggregateRating",
                  itemReviewed: {
                    "@type": "Book",
                    "@id": "https://sekretyrozwojuosobistego.pl/",
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
                  },
                  ratingValue: "100",
                  bestRating: "100",
                  ratingCount: "1",
                }),
              }}
            />
          </Head>

          <Preloader>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>

            <GoTop scrollStepInPx="50" delayInMs="16.66" />

            <Placeholder>
              <Loader />
            </Placeholder>
          </Preloader>
        </React.Fragment>
      );
    }
     export default withAnalytics(Router, { ga: "UA-xxxxxxxxx-1", fbq: "139xxxxxxxxx3" })(withRedux(initStore)(MyApp));