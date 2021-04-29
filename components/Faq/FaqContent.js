import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqContent extends Component {
    render() {
        return (
            <div className="faq-accordion" id="faq">
                <h2>FAQ</h2>
                <Accordion preExpanded={[1]} className="col-lg-8 col-md-10">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Czy można zamówić książkę za granicę?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="accordion-content">Książka zamówiona na tej stronie może być dostarczony tylko w granicach Polski, jednak dostawa za granicę również jest możliwa! Jeśli chcesz, by książka trafiła pod Twój adres za granicą, napisz do mnie <a href="https://www.sergiosdorje.com/kontakt/" target="blank">tutaj</a>.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Czy można otrzymać fakturę?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="accordion-content">Oczywiście - otrzymasz fakturę za książkę, jeśli jej potrzebujesz :) Pamiętaj, by kupując książkę zaznaczyć w formularzu, że chcesz otrzymać fakturę, a następnie dodaj nazwę firmy, adres i NIP.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Jak długo muszę czekać na zamówienie?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="accordion-content">Nie mogę pozwolić, by ktoś długo czekał na moją książkę :) Moim celem jest, by trafiła jak najszybciej w Twoje ręce, dlatego książki są najczęściej wysyłane następnego dnia lub najpóźniej dwa dni robocze od daty zamówienia.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Czy mogę kupić książkę stacjonarnie?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="accordion-content">''Sekrety Rozwoju Osobistego'' kupisz tylko na tej stronie - nie znajdziesz jej w księgarniach.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Co w przypadku, jeśli kurier mnie nie zastanie?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="accordion-content">Dobry kurier powinien zadzwonić do Ciebie, jeśli nie zastanie Cię w domu, ale cóż... To nie jest jego obowiązek i pewnie często zależy od humoru :) Jeśli Tobie i kurierowi nie uda się ''złapać'', jest szansa, że wróci on do Ciebie ponownie następnego dnia. Jeśli wiesz, że kurier był z Twoją paczką, gdy Ciebie akurat nie było - zadzwoń do niego czym prędzej i ustal, co dalej.
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
                            <p className="accordion-content">Pisz śmiało! By zadać inne pytanie korzystaj z <a href="https://www.sergiosdorje.com/kontakt/" target="blank">formularza</a>.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                  
                </Accordion>
            </div>
        );
    }
}

export default FaqContent;
