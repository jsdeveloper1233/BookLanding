import React, {useState, useEffect} from 'react';

const Dlaczego = ({ timing = 150 }) => {

    const [isBooped, setIsBooped] = React.useState(false);
    const style = {
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isBooped
        ? `rotate(5deg)`
        : `rotate(0deg)`,
    // fontSize: isBooped
    // ? `38px`
    // : `35px`,
    // borderBottom: isBooped
    // ? `3px solid #fff`
    // : `0`,
    transition: `transform 80ms`,
      transition: `font-size 250ms`,
      transition: `border-bottom 250ms`,
    };


    React.useEffect(() => {
        if (!isBooped) {
          return;
        }
        const timeoutId = window.setTimeout(() => {
          setIsBooped(false);
        }, timing);
        return () => {
          window.clearTimeout(timeoutId);
        };
      }, [isBooped]);

      const trigger = () => {
          isBooped ? setIsBooped(false) : setIsBooped(true);
        
      };

        return (
            <section className="saas-work-process ptb-100 dlaczego hearts">
                <div className="container">
                    <div className="section-title" >
                        <h2>Narzędzie RADYKALNA PRAWDA W ZWIĄZKU© jest dla Ciebie, jeśli…</h2>
                        {/* <div className="bar"></div>
                        <p>Często obserwujesz ludzi, którzy żyją szczęśliwie i w zgodzie ze samym sobą, prawda? Zastanawiasz,również Tobie!</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Jesteś singlem</h3>
                                <p>i chcesz wejść w nowy związek, jednak masz wrażenie, że nie do końca wiesz, jak budować relację.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Poznałeś/aś kogoś</h3>
                                <p>na kim Ci zależy i chcesz rozpocząć z tą osobą dobry, wartościowy związek.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Jesteś już w związku</h3>
                                <p>jednak między Tobą a Twoim partnerem jest sporo niedomówień, więc chcesz wznieść Waszą komunikację na wyższy poziom.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Chcesz nauczyć się</h3>
                                <p>lepiej słuchać i być słuchanym, a także poznać się na nowo ze swoją drugą połówką od zupełnie innej strony niż dotychczas.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Twój związek przechodzi kryzys</h3>
                                <p>nastały trudne czasy… Masz dużo wątpliwości i czujesz potrzebę ustalenia, czy to ma jeszcze sens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


export default Dlaczego;
