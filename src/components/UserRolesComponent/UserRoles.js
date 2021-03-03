import React, { useState } from "react";
import "./UserRoles.css";
import placeholder from "../../img/placeholder.png";

const roles = [
  [
    placeholder,
    "BI Advanced Expert",
    "This user role enables users to execute the DDRS file extraction transaction.",
  ],
  [
    placeholder,
    "BI Financial Reporter",
    "This user role enables users to execute various financial accounting reports. Some reports help users analyze transactional data and to identify potential accounting imbalances.",
  ],
  [
    placeholder,
    "Cash Balancing Approver",
    "The role is responsible or approving adjustments to cash transactions entered by the Cash Balancing Processor. Additionally, this role manages overall trends causing issues in cash reconciliation process. The Cash Balancing Approver is then responsible for generating reports to support the correct cash standing of the Army. This role is primarily performed at DFAS today.",
  ],
];

const UserRoles = () => {
  const [clickedText, setClickedText] = useState([]);

  var handleClick = (index, role) => {
    setClickedText(roles[index]);
    
  };

  return (
    <div>
      <div className="flex-row">
        {roles.map((role, index) => (
          <img
            className="user-image"
            src={roles[index][0]}
            key={index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex-row">
        <div className="user-list">
          {clickedText.map((t, index) => {
            return index === 0 ? null : <p key={index}>{t}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserRoles;
