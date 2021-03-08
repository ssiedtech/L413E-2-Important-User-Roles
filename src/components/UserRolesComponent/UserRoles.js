import React, { useState } from "react";
import "./UserRoles.css";
import Placeholder from "../../img/Placeholder.png";
import CashBalancerApprover from "../../img/CashBalancer.png";
import BIAdvancedExpert from "../../img/BI.png";
import FinancialReporter from "../../img/FinancialReporter.png";
//CREATE ARRAY IMPORT IMAGE//
const roles = [
  [
    BIAdvancedExpert,
    "BI Advanced Expert",
    "This user role enables users to execute the DDRS file extraction transaction.",
  ],
  [
    FinancialReporter,
    "BI Financial Reporter",
    "This user role enables users to execute various financial accounting reports. Some reports help users analyze transactional data and to identify potential accounting imbalances.",
  ],
  [
    CashBalancerApprover,
    "Cash Balancing Approver",
    "This role is responsible or approving adjustments to cash transactions entered by the Cash Balancing Processor. Additionally, this role manages overall trends causing issues in cash reconciliation process. The Cash Balancing Approver is then responsible for generating reports to support the correct cash standing of the Army. This role is primarily performed at DFAS today.",
  ],
];

const UserRoles = () => {
  //STATE MANAGEMENT//
  const [clickedText, setClickedText] = useState([]);

  //METHOD FOR STATE CHANGE//
  var handleClick = (index, role) => {
    setClickedText(roles[index]);
  };

  //MAP & RENDER IMAGE, ROLE, DESCRIPTION//
  return (
    <div>
      <div className="flex-row">
        {roles.map((role, index) => (
          <div className="flex-column">
            <img
              className="user-image"
              src={roles[index][0]}
              key={index}
              onClick={() => handleClick(index)}
            />
            <p className="user-title">{roles[index][1]}</p>
          </div>
        ))}
      </div>
      <div className="flex-row">
        <div>
          {clickedText.map((t, index) => {
            return index === 0 || index === 1 ? null : <p className= "user-definition" key={index}>{t}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserRoles;
