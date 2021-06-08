import React, { useState } from "react";
import "./UserRoles.css";

//IMORT IMAGES//
import CashBalancingProcessor from "../../img/CashBalancingProcessor.png";
import PaymentCertifier from "../../img/PaymentCertifier.png";

//CREATE ARRAY REFERENCE IMAGE IMPORT//
const roles2 = [
  {
    id: 1,
    image: CashBalancingProcessor,
    title: "Cash Balancing Processor",
    description:
      "The role is performed at DFAS today. The Cash Balancing Processor is responsible for reconciling cash postings in GFEBS with the inbound file from DCAS. The Cash Balancing Processor must ensure all cash transactions in the DCAS inbound file are represented as financial postings in GFEBS.",
  },

  {
    id: 2,
    image: PaymentCertifier,
    title: "Payment Certifier",
    description:
      "The role verifies, accepts or rejects the paymentproposal prepared by the Payment Processor. If corrections are needed, the Payment Certifier re-routes the action back through thePayment Processor, who researches and corrects the error. To establish proper separation of duties the Payment Certifier role is separate from the Payment Processor role. The Payment Certifier is the final authority and completes the payment process. The Payment Certifier is also able to edit the Payment Proposal.",
  },
];

const UserRoles2 = () => {
  //STATE MANAGEMENT//
  const [clickedText, setClickedText] = useState();
  //METHOD FOR STATE CHANGE//
  var handleClick = (index) => {
    setClickedText(index);
  };
  //MAP & RENDER IMAGE, ROLE, DESCRIPTION//
  return (
    <>
      <div className="flex-row">
        {roles2.map((role) => (
          <div className="flex-column" key={role.id}>
            <img className="user-image" alt="roles" src={role.image} onClick={() => handleClick(role.description)} />
            <p className="user-title">{role.title}</p>
          </div>
        ))}
      </div>
      <div className="flex-row">
        <p>{clickedText}</p>
      </div>
    </>
  );
};
//EXPORT COMPONENT
export default UserRoles2;
