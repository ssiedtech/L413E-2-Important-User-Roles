import React, { useState } from "react";
import "./UserRoles.css";

//IMORT IMAGES//
import CashBalancerApprover from "../../img/CashBalancingApprover.png";
import BIAdvancedExpert from "../../img/BIAdvancedExpert.png";
import FinancialReporter from "../../img/FinancialReporter.png";

//CREATE ARRAY REFERENCE IMAGE IMPORT//
const roles = [
  {
    id: 1,
    image: BIAdvancedExpert,
    title: "BI Advanced Expert",
    description: "This user role enables users to execute the DDRS file extraction transaction.",
  },

  {
    id: 2,
    image: FinancialReporter,
    title: "BI Financial Reporter",
    description:
      "This user role enables users to execute various financial accounting reports. Some reports help users analyze transactional data and to identify potential accounting imbalances.",
  },
  {
    id: 3,
    image: CashBalancerApprover,
    title: "Cash Balancing Approver",
    description:
      "This role is responsible or approving adjustments to cash transactions entered by the Cash Balancing Processor. Additionally, this role manages overall trends causing issues in cash reconciliation process. The Cash Balancing Approver is then responsible for generating reports to support the correct cash standing of the Army. This role is primarily performed at DFAS today.",
  },
];

//CREATE FUNCTIONAL COMPONENT//
const UserRoles = () => {
  //STATE MANAGEMENT//
  const [clickedText, setClickedText] = useState();
  //METHOD FOR STATE CHANGE//
  var handleClick = (index) => {
    setClickedText(index);
  };
  //MAP & RENDER IMAGE, ROLE, DESCRIPTION//
  return (
    <div>
      <div className="flex-row">
        {roles.map((role) => (
          <div className="flex-column" key={role.id}>
            <img className="user-image" alt="role" src={role.image} onClick={() => handleClick(role.description)} />
            <p className="user-title">{role.title}</p>
          </div>
        ))}
      </div>
      <div className="flex-row">
        <p>{clickedText}</p>
      </div>
    </div>
  );
};
//EXPORT COMPONENT//
export default UserRoles;
