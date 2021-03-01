import React, { useState } from "react";
import "./Terms.css";

const Terms = (props) => {
  // useState is the function component equivalent of the inherited 'setState'
  const [clickedText, setClickedText] = useState([]);

  var handleClick = (i) => {
    setClickedText(props.texts3[i]);
  };

  return (
    <div className="terms-container-row">
      <div className="definition-container">
        {clickedText.length > 0 && <p></p>}
        <ul>
          {clickedText.map((t, i) => (
            <li key={`text-${i}`}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="terms-container-column">
        {props.texts3.map((text, i) => (
          <button
            className="terms-button"
            key={i}
            onClick={() => handleClick(i)}
          >
            {props.texts3[i][0]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terms;
