import React, { Component } from "react";
import { finalPath } from "../../pages/index";

class Discover extends Component {
  render() {
    return (
      <section className="book-discover ptb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h3>TA KSIĄŻKA NIE JEST DLA KAŻDEGO’</h3>
                <span>
                  Jeśli szukasz miłych i ‘’obiecujących złote góry’’ porad, jak
                  zwiększyć swoją efektywność i stać się szczęśliwym w zaledwie
                  5 minut… Nie kupuj tej książki.
                </span>
                <p>
                  To nie jest poradnik, w którym przeczytasz, jak stać się
                  bogatym, by później zapomnieć o wszystkim w jeden dzień i
                  dalej żyć biednie. Jeśli kierujesz się w życiu zasadą, że
                  trzeba cieszyć się z tego, jak jest - nawet, gdy jest źle -
                  nie znajdziesz tu niczego dla siebie. Jeśli szukasz łatwych
                  rozwiązań (które są najczęściej tylko chwilowe), zamknij tę
                  stronę. Tu ich nie znajdziesz.
                </p>
                <p>
                  Nie napisałem tej książki po to, by mówić ludziom to, co chcą
                  usłyszeć. Napisałem ją, by Ci, którzy są otwarci na duchowy
                  samorozwój, poznali potężne narzędzia, dzięki którym
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
                <img src={finalPath + "/images/book-img2.png"} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
