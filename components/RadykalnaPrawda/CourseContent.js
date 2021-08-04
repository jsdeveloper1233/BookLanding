import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const CourseContent = () => {
  return (
    <div className="faq-accordion course-content" id="faq">
      <Accordion preExpanded={[1, 2, 3, 4]} className="col-lg-8 col-md-10">
        <AccordionItem uuid={1}>
          <AccordionItemHeading >
            <AccordionItemButton className="accordion__button background-light-blue">
              Jesteś w związku, ale przechodzicie przez poważny kryzys?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              Dzięki narzędziu „Radykalna prawda w związku©” określisz, czy
              warto ratować Twój związek i czy macie jeszcze szansę być razem
              szczęśliwi... Być może okaże się, że czas odpuścić. To może być
              dla Ciebie bolesne, ale przekonasz się, że odpuszczenie i pójście
              własną drogą jest lepsze, niż lata nieszczęścia, a Radykalna
              Prawda w Związku uświadomi Ci, jak w przyszłości tworzyć
              wartościową relację.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={2}>
          <AccordionItemHeading>
          <AccordionItemButton className="accordion__button background-light-blue">
              Nie potrafisz rozmawiać na trudne tematy i unikasz ''poważnej''
              wymiany zdań?{" "}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              Radykalna Prawda w Związku to zastrzyk dojrzałości. To narzędzie
              poprowadzi Was ''za rękę'' przez proces komunikacji. Czas nauczyć
              się rozmawiać i przestać chować głowę w piasek. Pozwól sobie
              pomóc... Zobaczysz, że trudne tematy są potrzebne i to one są
              fundamentem silnych związków.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={3}>
          <AccordionItemHeading>
          <AccordionItemButton className="accordion__button background-light-blue">
              Masz traumy, które wykreowały negatywne wyobrażenie na temat
              związku?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              Przez to nie wiesz tak naprawdę, jak się zachowywać w wielu
              sytuacjach i jak funkcjonować we dwoje? Radykalna Prawda w Związku
              pomoże Ci otworzyć się na siebie i na swoją przyszłą lub obecną
              drugą połówkę... Dzięki temu szybko zauważysz, że to, co myślisz i
              co sobie wyobrażasz niekoniecznie jest prawdą. I że czas otworzyć
              się na słuchanie własnego serca :)
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={4}>
          <AccordionItemHeading>
          <AccordionItemButton className="accordion__button background-light-blue">
              Czym tak naprawdę jest ZDROWY, SZCZĘŚLIWY związek?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="accordion-content">
              <ul>
                <li>To połączenie na poziomie serca</li>
                <li>To połączenie na poziomie ciała/seksualności</li>
                <li>To połączenie na poziomie świadomości</li>
              </ul>
              Dzięki narzędziu Radykalna Prawda w Związku© dowiesz się, czy Ty i
              Twój partner macie połączenie na poziomie świadomości... Ponieważ
              zdrowy związek to więcej niż wspólny ulubiony serial i zgodność w
              wyborze restauracji!
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default CourseContent;
