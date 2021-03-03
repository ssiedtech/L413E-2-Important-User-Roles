import React, { useState } from "react";
import "./Terms.css";

const terms = [
  [
    "DCAS",
    "Defense Cash Accountability System; DFAS system responsible for processing cash transactions and treasury reporting for various Department of Defense agencies.",
  ],
  [
    "DDRS",
    "Defense Departmental Reporting System; DFAS financial reporting system, which uses the Standard Financial Information Structure (SFIS).",
  ],
  [
    "ECC",
    "ERP Central Component; The portion of GFEBS representing the transactional accounting system. ECC possesses reporting functionality.",
  ],
  [
    "BI",
    "Business Intelligence; Industry term referring to reporting systems that provide advanced reporting and analysis capabilities such as slicing and dicing data. Typically, transaction data captures in GFEBS ECC get sent to GFEBS BI to utilize its additional reporting features.",
  ],
];

const Terms = () => {
  
  const [clickedText, setClickedText] = useState([]);

  var handleClick = (i) => {
    setClickedText(terms[i]);
  };

  return (
    <div className="terms-container-row">
      <div className="definition-container">
        <div>
          {clickedText.map((t, i) => (
            <div>
              <p key={`text-${i}`}>{t}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="terms-container-column">
        {terms.map((text, i) => (
          <button
            className="terms-button"
            key={i}
            onClick={() => handleClick(i)}
          >
            {terms[i][0]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terms;
