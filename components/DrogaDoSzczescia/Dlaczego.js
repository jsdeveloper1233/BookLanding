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
            <section className="saas-work-process ptb-100 dlaczego">
                <div className="container">
                    <div className="section-title" >
                        <h2>Dlaczego program <span style={style}>“Droga do szczęścia”</span><br /> jest tym, co <span style={style}>Ci pomoże</span>?</h2>
                        <div className="bar"></div>
                        <p>Często obserwujesz ludzi, którzy żyją szczęśliwie i w zgodzie ze samym sobą, prawda? Zastanawiasz,również Tobie!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Poznasz siebie</h3>
                                <p>Dzięki poznaniu całej prawdy o sobie, będziesz mógł/a zrobić pierwszy, najważniejszy krok na drodze do szczęścia.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Nauczysz się pracy z intencją</h3>
                                <p>Podczas programu “Droga do szczęścia’’ nauczysz się formułować i - co najważniejsze - realizować swoje intencje.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Dowiesz się, jak stworzyć dobry związek</h3>
                                <p>Relacja z drugą osobą jest najczęściej tym, co nas uszczęśliwia lub odwrotnie - zabiera nam energię. Nauczysz się tworzyć związki pełne miłości i akceptacji.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-work-process" onMouseEnter={trigger} onMouseLeave={trigger}>
                                <h3>Poznasz moc medytacji</h3>
                                <p>Medytacja będzie towarzyszyć Ci przez cały program - dzięki niej zajrzysz w głąb siebie, wyciszysz się oraz dostrzeżesz nową rzeczywistość, którą zaczniesz świadomie kreować.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


export default Dlaczego;
