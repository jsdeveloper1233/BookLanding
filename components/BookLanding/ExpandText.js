import React, { useState } from "react";

const ExpandText = ({text, maxLength}) => {
  const [showFull, setShowFull] = useState(false);

  console.log(showFull);

  let visibleText = null;
  let expander = null;



  const clickHandler = () => {
    setShowFull(!showFull);
  };

  if (showFull || text.length <= maxLength) {
    visibleText = text;
  } else {
    visibleText = text.substring(0, maxLength);
  }


  if (text.length >= maxLength) {
    expander = showFull ? (
      <span onClick={clickHandler} className="expand-opinion"><b>&lt;Zwiń</b>&gt;</span>
    ) : (
      <span onClick={clickHandler} className="expand-opinion"> ...<b>&lt;Rozwiń&gt;</b></span>
    );
  }

  return (
    <>
    <small>sdgasdgsdagas</small>
      {visibleText}{expander}
    </>
  );
};
export default ExpandText;
