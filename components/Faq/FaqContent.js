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
            
            <div className="faq-accordion" id="faq" itemScope="" itemType="https://schema.org/FAQPage">
                <h2>FAQ</h2>
                <Accordion preExpanded={[1]} className="col-lg-8 col-md-10">
                    <AccordionItem itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" uuid={1}>
                        <AccordionItemHeading>
                            <AccordionItemButton itemProp="name">
                            Czy można zamówić książkę za granicę?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="accordion-content"><span itemProp="text">Książka zamówiona na tej stronie może być dostarczony tylko w granicach Polski, jednak dostawa za granicę również jest możliwa! Jeśli chcesz, by książka trafiła pod Twój adres za granicą, napisz do mnie <a href="https://www.sergiosdorje.com/kontakt/" target="blank">tutaj</a>.</span></p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" uuid={2}>
                        <AccordionItemHeading >
                            <AccordionItemButton itemProp="name">
                            Czy można otrzymać fakturę?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="accordion-content" ><span itemProp="text">Oczywiście - otrzymasz fakturę za książkę, jeśli jej potrzebujesz :) Pamiętaj, by kupując książkę zaznaczyć w formularzu, że chcesz otrzymać fakturę, a następnie dodaj nazwę firmy, adres i NIP.</span></p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" uuid={3}>
                        <AccordionItemHeading>
                            <AccordionItemButton itemProp="name">
                            Jak długo muszę czekać na realizację zamówienia?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="accordion-content"><span itemProp="text">Nie mogę pozwolić, by ktoś długo czekał na moją książkę :) Moim celem jest, by trafiła jak najszybciej w Twoje ręce, dlatego książki są najczęściej wysyłane następnego dnia lub najpóźniej w ciągu dwóch dni roboczych od daty zamówienia.</span></p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" uuid={4}>
                        <AccordionItemHeading>
                            <AccordionItemButton itemProp="name">
                            Czy mogę kupić książkę stacjonarnie?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="accordion-content"><span itemProp="text">''Sekrety Rozwoju Osobistego'' kupisz tylko na tej stronie - nie znajdziesz jej w księgarniach.</span></p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" uuid={5}>
                        <AccordionItemHeading>
                            <AccordionItemButton itemProp="name">
                            Co w przypadku, jeśli kurier mnie nie zastanie?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="accordion-content"><span itemProp="text">Dobry kurier powinien zadzwonić do Ciebie, jeśli nie zastanie Cię w domu, ale cóż... To nie jest jego obowiązek i pewnie cczęsto zależy to od jego humoru :) Jeśli Tobie i kurierowi nie uda się ''złapać'', jest szansa, że wróci on do Ciebie następnego dnia. Jeśli wiesz, że kurier był z Twoją paczką, gdy Ciebie akurat nie było - zadzwoń do niego czym prędzej i ustal, co dalej.</span>
</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" uuid={6}>
                        <AccordionItemHeading>
                            <AccordionItemButton itemProp="name">
                            Jak mogę zadać inne pytania?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <p className="accordion-content"><span itemProp="text">Pisz śmiało! By zadać inne pytanie korzystaj z <a href="https://www.sergiosdorje.com/kontakt/" target="blank">formularza</a>.</span></p>
                        </AccordionItemPanel>
                    </AccordionItem>
                  
                </Accordion>
            </div>
        );
    }
}

export default FaqContent;
