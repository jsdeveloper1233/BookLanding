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
      <div className="faq-accordion" id="faq">
        <h2>Zobacz co będzie na warsztatach</h2>
        <Accordion preExpanded={[1]}>
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
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Czy można otrzymać fakturę?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion-content">
                Oczywiście - otrzymasz fakturę za książkę, jeśli jej
                potrzebujesz :) Pamiętaj, by kupując książkę zaznaczyć w
                formularzu, że chcesz otrzymać fakturę, a następnie dodaj nazwę
                firmy, adres i NIP.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Jak długo muszę czekać na zamówienie?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion-content">
                Nie mogę pozwolić, by ktoś długo czekał na moją książkę :) Moim
                celem jest, by trafiła jak najszybciej w Twoje ręce, dlatego
                książki są najczęściej wysyłane następnego dnia lub najpóźniej
                dwa dni robocze od daty zamówienia.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Czy mogę kupić książkę stacjonarnie?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion-content">
                ''Sekrety Rozwoju Osobistego'' kupisz tylko na tej stronie - nie
                znajdziesz jej w księgarniach.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Co w przypadku, jeśli kurier mnie nie zastanie?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion-content">
                Dobry kurier powinien zadzwonić do Ciebie, jeśli nie zastanie
                Cię w domu, ale cóż... To nie jest jego obowiązek i pewnie
                często zależy od humoru :) Jeśli Tobie i kurierowi nie uda się
                ''złapać'', jest szansa, że wróci on do Ciebie ponownie
                następnego dnia. Jeśli wiesz, że kurier był z Twoją paczką, gdy
                Ciebie akurat nie było - zadzwoń do niego czym prędzej i ustal,
                co dalej.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Jak mogę zadać inne pytania?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion-content">
                Pisz śmiało! By zadać inne pytanie korzystaj z{" "}
                <a href="https://www.sergiosdorje.com/kontakt/" target="blank">
                  formularza
                </a>
                .
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
export default CourseContent;
