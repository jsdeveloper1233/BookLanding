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
      <h2>Zobacz, co będzie na warsztatach</h2>
      <Accordion preExpanded={[1]} className="col-lg-8 col-md-10">
        <AccordionItem uuid={1}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 1: poznawanie siebie
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Wprowadzenie</li>
                <li>
                  Poznawanie siebie - pierwszy krąg - wytłumaczenie reguły, że
                  co jest w kręgu zostanie w kręgu (o bezpieczeństwie)
                </li>
                <li>Składniki szczęścia, co musi być, żeby było szczęście</li>
                <li>Agenda na następne spotkania</li>
                <li>Będą medytacje - jak się przygotować?</li>
                <li>Łączenie praktyki i teorii - dlaczego są ważne razem</li>
                <li>Medytacja na szczęście</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={2}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 2: Energia męska i żeńska
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Czym są energia męska i energia żeńska?</li>
                <li>O szkodliwości równowagi energetycznej</li>
                <li>Taniec energii żeńskiej i męskiej</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={3}>
          <AccordionItemHeading>
            <AccordionItemButton>Moduł 3: Intencje</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Intencje i afirmacje - kiedy jedno a kiedy drugie</li>
                <li>Jak poprawnie sformułować intencje</li>
                <li>Wspólna praktyka - medytacja Joganidra</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={4}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 4: Relacje i związki
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Koło Zgody Betty Martin</li>
                <li>5 języków miłości</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={5}>
          <AccordionItemHeading>
            <AccordionItemButton>Moduł 5: Neuropsychologia</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>
                  Akceptacja siebie i potężna moc terapeutyczna nerwu błędnego
                </li>
                <li>Teoria poliwagalna</li>
                <li>Sieć stanu spoczynkowego</li>
                <li>Jak w życiu codziennym czuć się lepiej</li>
                <li>Rodzaje medytacji</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={6}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 6: Wpływ patriarchatu na nasze życie
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Powstanie patriarchatu</li>
                <li>Jak się odciąć od patriarchatu w zdrowu sposób</li>
                <li>Różnice: tantra i neotantra</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={7}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 7: Integracja i dzielenie się
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Czas na wspólną integrację i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={8}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 8: Hormony, orgazmy i seks z perspektywy nauki i medycyny
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Brak libido a medycyna</li>
                <li>Brak libido a psychologia</li>
                <li>Brak libido a neuropsychologia</li>
                <li>Edukacja seksualna dla dzieci - kampania społeczna</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={9}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 9: Wewnętrzne dziecko
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Jak się opiekować wewnętrznym dzieckiem</li>
                <li>Trójkąt dramatyczny Karpmana</li>
                <li>Medytacja nad wewnętrznym dzieckiem</li>
                <li>Edukacja seksualna dla dzieci - kampania społeczna</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={10}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 10: Unikanie szkód i grup toksycznych
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Brak fanatyzmu</li>
                <li>Szkodliwość niektórych praktyk</li>
                <li>O Runach</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid={11}>
          <AccordionItemHeading>
            <AccordionItemButton>
              Moduł 11: Nauka odcinania się
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="accordion-content">
              <ul>
                <li>Ludzie, którzy podcinają skrzydła</li>
                <li>Jak odcinać się</li>
                <li>O zazdrości</li>
                <li>Medytacja Tratak</li>
                <li>Pytania i dzielenie się w kręgu</li>
              </ul>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default CourseContent;
