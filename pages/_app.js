import "../public/css/bootstrap.min.css";
import "../public/css/icofont.min.css";
import "../public/css/animate.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "react-image-lightbox/style.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.scss";
import "../public/css/responsive.css";
import '../node_modules/react-notifications/lib/notifications.css';

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
import Gtm from 'next-gtm'

  const  MyApp = props =>  {
      const { Component, pageProps, store } = props;


      return (
        <React.Fragment>

          <Gtm id='GTM-KVLNWK4'/>
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
     export default withAnalytics(Router, { fbq: "853837195214636" })(withRedux(initStore)(MyApp));
