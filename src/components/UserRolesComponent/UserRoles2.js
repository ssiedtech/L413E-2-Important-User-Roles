import React, { useState } from "react";
import "./UserRoles.css";

//IMORT IMAGES//
import CashBalancingProcessor from "../../img/CashBalancingProcessor.png";
import PaymentCertifier from "../../img/PaymentCertifier.png";

//CREATE ARRAY REFERENCE IMAGE IMPORT//
const roles2 = [
  [
    CashBalancingProcessor,
    "Cash Balancing Processor",
    "The role is performed at DFAS today. The Cash Balancing Processor is responsible for reconciling cash postings in GFEBS with the inbound file from DCAS. The Cash Balancing Processor must ensure all cash transactions in the DCAS inbound file are represented as financial postings in GFEBS.",
  ],
  [
    PaymentCertifier,
    "Payment Certifier",
    "The role verifies, accepts or rejects the paymentproposal prepared by the Payment Processor. If corrections are needed, the Payment Certifier re-routes the action back through thePayment Processor, who researches and corrects the error. To establish proper separation of duties the Payment Certifier role is separate from the Payment Processor role. The Payment Certifier is the final authority and completes the payment process. The Payment Certifier is also able to edit the Payment Proposal.",
  ],
];

const UserRoles2 = (props) => {
  //STATE MANAGEMENT//
  const [clickedText, setClickedText] = useState([]);
  //METHOD FOR STATE CHANGE//
  var handleClick = (index, role) => {
    setClickedText(roles2[index]);
  };
  //MAP & RENDER IMAGE, ROLE, DESCRIPTION//
  return (
    <div>
      <hr></hr>
      <div className="flex-row">
        {roles2.map((role, index) => (
          <div className="flex-column">
            <img
              className="user-image"
              src={roles2[index][0]}
              key={index}
              onClick={() => handleClick(index)}
            />
            <p className="user-title">{roles2[index][1]}</p>
          </div>
        ))}
      </div>

      <div className="flex-row">
        <div>
          {clickedText.map((t, index) => {
            return index === 0 || index === 1 ? null : (
              <p className="user-definition" key={index}>
                {t}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
//EXPORT COMPONENT
export default UserRoles2;
