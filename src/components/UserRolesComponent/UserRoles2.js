import React, { useState } from "react";
import "./UserRoles.css";
import placeholder from "../../img/placeholder.png";

const roles2 = [
  [
    placeholder,
    "Cash Balancing Processor",
    "The role is performed at DFAS today. The Cash Balancing Processor is responsible for reconciling cash postings in GFEBS with the inbound file from DCAS. The Cash Balancing Processor must ensure all cash transactions in the DCAS inbound file are represented as financial postings in GFEBS.",
  ],
  [
    placeholder,
    "BI Financial Reporter",
    "The role verifies, accepts or rejects the paymentproposal prepared by the Payment Processor. If corrections are needed, the Payment Certifier re-routes the action back through thePayment Processor, who researches and corrects the error. To establish proper separation of duties the Payment Certifier role is separate from the Payment Processor role. The Payment Certifier is the final authority and completes the payment process. The Payment Certifier is also able to edit the Payment Proposal.",
  ],
];


const UserRoles2 = (props) => {
  const [clickedText, setClickedText] = useState([]);

  var handleClick = (index, role) => {
    setClickedText(roles2[index]);
  
  };

  return (
    <div>
      <div className="flex-row">
        {roles2.map((role, index) => (
          <img
            className="user-image"
            src={roles2[index][0]}
            key={index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex-row">
        <ul className="user-list">
          {clickedText.map((t, index) => {
            return index === 0 ? null : <li key={index}>{t}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};


export default UserRoles2;
