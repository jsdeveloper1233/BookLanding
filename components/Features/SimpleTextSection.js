import React from "react";

const SimpleTextSection = (props) => {
  const { pText, theClass, isDividedInTwo } = props;
  const dividedInTwo = isDividedInTwo ? "dividedInTwo" : "";
  const dividedInTwoInner = isDividedInTwo ? "col-lg-6 dividedInTwoInner" : "col-lg-12";

  return (
    <section className="app-funfacts-area ptb-100 simple-text-widget">
      <div className="container">
        <div className={`row ${dividedInTwo}`}>
          <div className={`${dividedInTwoInner}`}>
            <p className={theClass}>{pText}</p>
          </div>

          {
            <div className={`${dividedInTwoInner}`}>
              <img src="/images/sergio3-s.png" ></img>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default SimpleTextSection;
