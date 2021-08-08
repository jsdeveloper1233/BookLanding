import React from "react";
import Image from 'next/image'
const SimpleTextSection = (props) => {
  const {
    pText,
    theClass,
    isDividedInTwo,
    thereIsNoSideImage,
    jestCytat,
    cytatAutor,
    divClass,
    customImage,
    sectionClass,
    insideBlockQuote
  } = props;
  const dividedInTwo = isDividedInTwo ? "dividedInTwo" : "";
  const dividedInTwoSection = isDividedInTwo ? "dividedInTwoSection" : "";
  const dividedInTwoInner = isDividedInTwo
    ? "col-lg-6 dividedInTwoInner"
    : "col-lg-12";

    const image = customImage ? customImage : "/images/sergio3-s.png";

  return (
    <section className={`app-funfacts-area ptb-100 simple-text-widget dividedInTwoSection ${sectionClass}`}>
      <div className="container">
        <div className={`row ${dividedInTwo, divClass}`}>
          <div className={`${dividedInTwoInner} divtext`}>
            {!jestCytat && <p className={theClass}>{pText}</p>}
            {jestCytat && (
              <blockquote className={theClass}>
                <p className={`quote-text ${insideBlockQuote}`}>{pText}</p>
                <footer>
                  <cite className={`${insideBlockQuote}`}>{cytatAutor}</cite>
                </footer>
              </blockquote>
            )}
          </div>

          {!thereIsNoSideImage && (
            <div className={`${dividedInTwoInner} divimage`}>
              <div className='custom-divi-image'>
                <Image layout='fill' src={image}></Image>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SimpleTextSection;
