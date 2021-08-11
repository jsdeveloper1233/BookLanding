import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel3"));
import { finalPath } from "../../pages/index";
import Image from "next/image";

const FirstTime = () => {
  return (
    <section className="team-area first-time ptb-100 bg-gray">
      <div className="container">
        <div className="d-flex divided">
          <div className="section-title flex-50">
            <h2>Co zyskasz, dzięki przeczytaniu tej książki?</h2>
            <p className="mt-4">
              Dzięki przeczytaniu tej książki{" "}
              <strong>przestaniesz czuć zagubienie</strong>. Odkryjesz bogactwo
              świata duchowego i uzbroisz się w narzędzia do rozpoznawania
              toksycznych grup. Dowiesz się co blokuje Cię przed doświadczaniem{" "}
              <strong>pełni szczęścia</strong>. Wyklaruje Ci się jacy powinni
              być wspierający ludzie i takich zaczniesz przyciągać i się nimi
              otaczać.
            </p>
            <p className="mt-3">
              To <strong>pierwsza i jedyna książka na świecie</strong>, która za
              pomocą Róży Energii© szczegółowo opisuje różnice między energią
              żeńską aktywną i pasywną, a energią męską aktywną i pasywną. Inne
              teksty, które upraszczają mówiąc, że energia żeńska to pasywna a
              męska jest aktywna.
            </p>
          </div>
          <div className="flex-50 img">
            <div className="image-container-sergio-5s">
              <Image
                layout="fill"
                src={finalPath + "/images/sergio-5s.jpg"}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="three-boxes-container">
        <div className="features-item">
            <div className="icon">
              <i className="icofont-wall"></i>
            </div>
            <p>
              Książka zawiera kwestionariusz 40 pytań, dzięki któremu sprawdzisz
              czy dana grupa jest sektą.
            </p>
          </div>
          <div className="features-item">
            <div className="icon">
              <i className="icofont-wall"></i>
            </div>
            <p>
              Pierwsza książka w Polsce, która otrzymała zgodę od Dr. Betty
              Martin na publikację i opisania Koła Zgody.
            </p>
          </div>
          <div className="features-item">
            <div className="icon">
              <i className="icofont-wall"></i>
            </div>
            <p>
              Pierwsza książka w Polsce, która odczarowuje pojęcie „Tantry”
              dokładnie tłumacząc czytelnikowi czym jest prawdziwa Tantra i jak
              rozpoznać nadużywanie tego słowa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTime;
