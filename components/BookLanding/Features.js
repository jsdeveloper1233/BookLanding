import React, { Component } from "react";
import { finalPath } from "../../pages/index";
import Image from 'next/image'
class Features extends Component {
  render() {
    return (
      <section className="features-area book-features">
        <div className="container">
          <div className="section-title">
            <h2>Bądźmy szczerzy...</h2>
            <div className="bar"></div>
          </div>
          <div className="row rg-50">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-muscle"></i>
                </div>
                <h3>POTĘŻNE NARZĘDZIA </h3>
                <p>
                  Jeśli szukasz łatwych rozwiązań, tu ich nie znajdziesz. Jeśli
                  szukasz miłych i ‘’obiecujących złote góry’’ porad, jak stać
                  się szczęśliwym w zaledwie 5 minut, to… nie kupuj tej książki.
                  To narzędzie pomoże Ci wykreować życie, o jakim marzysz, ale
                  wymaga również Twojej pracy.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-verification-check"></i>
                </div>
                <h3>PRAWDA</h3>
                <p>
                  Nie napisałem tej książki po to, by mówić ludziom to, co chcą
                  usłyszeć. Napisałem ją, byCi, którzy są otwarci na samorozwój
                  duchowy poznali potężne narzędzia, dzięki którym rzeczywistość
                  zacznie być ich największym dziełem. Ta książka pomoże Ci
                  przejąć ster i poznać tajemnice rozwoju osobistego.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-unlocked"></i>
                </div>
                <h3>TAJNA WIEDZA </h3>
                <p>
                  SEKRETY ROZWOJU OSOBISTEGO to książka tylko dla osób, które
                  chcą dokonywać w sobie prawdziwych zmian i chcą odkryć prawdy,
                  o których mało kto mówi. To tajna wiedza, którą powinien poznać
                  każdy człowiek na drodze do samoświadomości.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="features-inner-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="features-inner-content">
                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-wall"></i>
                    </div>
                    <h3>
                      Czy czujesz w swoim życiu, że czasem wpadasz na mur?
                    </h3>
                    <p>
                      Mam na myśli mur, który broni Ci dostępu do spełnienia
                      i samoświadomości. Tym murem często są błędne przekonania
                      kreowane przez społeczeństwo, toksyczni ludzie, brak
                      wiedzy o sobie samym.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-flag"></i>
                    </div>
                    <h3>...Ale to nie jest Twoje przeznaczenie!</h3>
                    <p>
                      Tylko Ty - nikt inny - odpowiadasz za jakość swojego
                      życia. Możesz stworzyć rzeczywistość bez toksyczności, bez
                      nienawiści, bez osądów. Zasługujesz na coś więcej, ale
                      pamiętaj… Musisz po to sięgnąć - musisz podjąć
                      najważniejszą decyzję. Decyzję o zmianie.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                    <h3>
                      Książka ‘’Sekrety Rozwoju Osobistego’’ jest jak dobra
                      przyjaciółka.
                    </h3>
                    <p className="pb-100">
                      Prawdziwa przyjaźń nie ma oczekiwań, nie osądza, nie
                      narzuca swojego zdania. Służy swoją mądrością i daje siłę,
                      ale nie wymaga od Ciebie niczego. Tak samo jest z tą
                      książką - dostarczy Ci cenne wskazówki i przeprowadzi za
                      rękę przez proces zmiany, ale to Ty na końcu drogi
                      zdecydujesz, jakiego życia pragniesz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 div-with-featured-image">
                <div className="features-image ">
                  <div className="features-image-sergio-4-sm">
                      <Image
                        layout="fill"
                        src={finalPath + "/images/sergio-4-sm.jpg"}
                        alt="image"
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="shape7">
          <img src={finalPath + "/images/shape7.png"} alt="shape" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src={finalPath + "/images/shape6.png"} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={finalPath + "/images/shape8.svg"} alt="shape" />
        </div>
        <div className="shape9">
          <img src={finalPath + "/images/shape9.svg"} alt="shape" />
        </div>
        <div className="shape10">
          <img src={finalPath + "/images/shape10.svg"} alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src={finalPath + "/images/shape11.svg"} alt="shape" />
        </div> */}
      </section>
    );
  }
}

export default Features;
