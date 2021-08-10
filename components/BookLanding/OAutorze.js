import React, { Component } from "react";
import { finalPath } from "../../pages/index";
import Image from 'next/image';
class OAutorze extends Component {
  render() {
    return (
      <section className="book-discover ptb-100" id="author">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h3>O AUTORZE</h3>
                <span>Sergio S Dorje</span>
                <p>
                  Pochodzi z małego miasteczka na Sardynii. Zajmuje się wspieraniem ludzi na drodze do świadomego życia i pomaga im zajrzeć w głąb siebie - jest to możliwe dzięki jego wiedzy na temat szeroko pojętej duchowości i wieloletnich doświadczeń. Sam przebył swoją podróż do świadomego przebudzenia - teraz wybiera się w nią razem ze swoimi czytelnikami. 
Książka SEKRETY ROZWOJU OSOBISTEGO jest owocem kilkunastoletniego intensywnego doświadczenia, podbudowanego wiedzą medyczną i wieloletnią praktyką. Sergio S Dorje szkolił się w wielu krajach, uczestnicząc w kilkudziesięciu różnych – krótszych i dłuższych warsztatach oraz seminariach – zarówno z mnichami z Tybetu i Nepalu, mistrzami jogi znanymi na całym świecie, jak i ze świeckimi prowadzącymi.

                </p>
                <p>
                  Nie napisałem tej książki po to, by mówić ludziom to, co chcą
                  usłyszeć. Napisałem ją, by Ci, którzy są otwarci na duchowy
                  samorozwój poznali potężne narzędzia, dzięki którym
                  rzeczywistość zacznie być ich największym dziełem.
                </p>
                <p>
                  SEKRETY ROZWOJU OSOBISTEGO to książka tylko dla osób, które
                  chcą dokonywać w sobie prawdziwych zmian i chcą odkryć prawdy,
                  o których mało kto mówi.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-img">
                <div className="discover-img-sergiosdorje">
                    <Image
                      layout="fill"
                      src={finalPath + "/images/sergiosdorje.jpg"}
                      alt="Sekrety rozwoju osobistego"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OAutorze;
