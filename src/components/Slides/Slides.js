import React, { useRef, useState, useEffect, useContext } from "react";
import { Slide } from "react-slideshow-image";
import { AppContext } from "../../context/AppContext";
import Quiz from "react-quiz-component";
import { quiz } from "../Quiz/Quiz";
import TermsComponent from "../TermsComponent/TermsComponent.js";
import UserRolesComponent from "../UserRolesComponent/UserRolesComponent";
import placeholder from "../../img/placeholder.png";

function Slides() {
  // State management
  const slideRef = useRef();
  const context = useContext(AppContext);

  const [key, setKey] = useState();

  // Calculates and sets progress bar percentage after every slide change
  useEffect(() => {
    context.toggleProgress();

    // Removes back arrow on first slide
    if (context.currentSlide === 1) {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav"
      ).style.display = "none";
    } else {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.undefined.nav"
      ).style.display = "block";
    }

    // Removes next arrow on final slide
    if (context.currentSlide === context.total) {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav"
      ).style.display = "none";
    } else {
      document.querySelector(
        "#root > div > div.mx-auto.my-auto > div > div > div.next-arrow.nav"
      ).style.display = "block";
    }
  }, [context]);

  // On page load, this populates the index dropdown and hides back arrow on page one to
  useEffect(() => {
    context.compileIndex();
  }, []);

  // Changes slide to specific index from dropdown menu
  useEffect(() => {
    slideRef.current.goTo(parseInt(context.currentSlide, 10));
  }, [context.currentSlide]);

  // Resets Quiz key to random number and rerenders it... there's probably a better way to do this.
  function retakeQuiz() {
    return setKey(Math.random());
  }

  // React-Slideshow package settings
  const properties = {
    indicators: false,
    arrows: true,
    autoplay: false,
    defaultIndex: 0,
    transitionDuration: 300,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px" }}>
        <i className="fas fa-arrow-left"></i>
      </div>
    ),
    nextArrow: (
      <div
        className="next-arrow"
        style={{ width: "30px", marginLeft: "-30px" }}
      >
        <i className="fas fa-arrow-right"></i>
      </div>
    ),
    onChange: (previous, next) => {
      context.onSlideChange(previous, next);
    },
  };

  // Sets post-quiz state
  const onCompleteAction = (obj) => {
    document.querySelector(".next-arrow").style.display = "block";
    context.onQuizCompletion();
  };

  // Renders custom results page
  const renderCustomResultPage = (obj) => {
    return (
      <div>
        <h4>Well done, you may now continue with the lesson.</h4>
        <button onClick={retakeQuiz} className="btn btn-primary">
          Retake
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        className="mx-auto my-auto"
        style={{
          top: "300px",
          height: "500px",
          width: "900px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Slide ref={slideRef} easing="ease" {...properties}>
          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <h3 className="slide-title">Welcome to Important User Roles</h3>
                <span>
                  In this module we will discuss GFEBS user roles that are
                  important to the entire process of producing financial
                  reports. These user roles are enablers in the process that are
                  responsible for data entry that provides transactional data
                  needed for developing the financial reports.
                </span>
              </div>
              <div className="col">
                <img src={placeholder} alt="image"></img>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <h3 className="slide-title">Module Objectives</h3>
                <ul>
                  <li>Identify Key user Roles</li>
                  <li>Describe the responsibilities of each role</li>
                  <li>
                    Explain how user roles intersect with the end-to-end process
                  </li>
                </ul>
              </div>
              <div className="col">
                <img src={placeholder} alt="image"></img>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <h3 className="slide-title">Key Terms</h3>
                <br />
                <TermsComponent />
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <h3 className="slide-title">
                  User Roles: The End-to-End Process 1 of 2
                </h3>
                <p>
                  The end resulting process of producing financial reports is
                  interfaced on multiple levels through users of GFEBS who enter
                  data, process transactions, and produce relevant reports
                  necessary for auditability, accountability, and making
                  financial decisions. This is a high level review and does not
                  include all important roles. <strong>(Click Images to View)</strong>
                </p>
                <div>
                  <UserRolesComponent
                    image={placeholder}
                    name="BI Advanced Expert "
                    description="This user role enables users to execute the DDRS file extraction transaction."
                  />
                  <UserRolesComponent
                    image={placeholder}
                    name="BI Financial Reporter"
                    description=" This user role enables users to execute various financial accounting reports. Some reports help users analyze transactional data and to identify potential accounting imbalances."
                  />
                  <UserRolesComponent
                    image={placeholder}
                    name="Cash Balancing Approver"
                    description="The role is responsible or approving adjustments to cash transactions entered by the Cash Balancing Processor. Additionally, this role manages overall trends causing issues in cash reconciliation process. The Cash Balancing Approver is then responsible for generating reports to support the correct cash standing of the Army. This role is primarily performed at DFAS today."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <div>
                  <h3 className="slide-title">
                    User Roles: The End-to-End Process 2 of 2
                  </h3>
                  <p>
                    GFEBS users with the Cash Balancing Processor role follow
                    the 60-60-10 day rule: 60 days to research unmatched items,
                    60 days for the responsible activity, 10 days to take
                    action.
                  </p>
                  <div>
                    <UserRolesComponent
                      image={placeholder}
                      name="Cash Balancing Processor "
                      description="The role is performed at DFAS today. The Cash Balancing Processor is responsible for reconciling cash postings in GFEBS with the inbound file from DCAS. The Cash Balancing Processor must ensure all cash transactions in the DCAS inbound file are represented as financial postings in GFEBS."
                    />
                    <div>
                    <UserRolesComponent
                      image={placeholder}
                      name="Payment Certifier"
                      description="The role verifies, accepts or rejects the paymentproposal prepared by the Payment Processor. If corrections are needed, the Payment Certifier re-routes the action back through thePayment Processor, who researches and corrects the error. To establish proper separation of duties the Payment Certifier role is separate from the Payment Processor role. The Payment Certifier is the final authority and completes the payment process. The Payment Certifier is also able to edit the Payment Proposal."
                    />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <div>
                  <h3 className="slide-title">Business Process</h3>
                  <p>
                    Financial reporting is segmented into three business areas.
                    In order forthese areas to function, users must introduce
                    transactional data into the workflow. The following
                    highlights the relationship between business areas and user
                    roles.
                  </p>
                  
                </div>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <strong>Record Financial Data:</strong> GFEBS accumulates
                    data from various sources. Low level data received comes
                    from routine transactions that include sales orders and
                    purchase requisitions. Transactions entered by Purchase
                    Requisition Processors and Sales Order Processors are
                    recorded in ECC and then posted to BI.
                  </li>
                  <br />
                  <li>
                    <strong>Reconcile Financial Data:</strong> High level data
                    received at DFAS is processed by Cash Balance Processor
                    role.
                  </li>
                  <br />
                  <li>
                    <strong>Consume Financial Data:</strong> GFEBS BI regularly
                    loads relevant financialdata, this data is available for the
                    Financial Reporter role that creates reports in detail and
                    in summary.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <div>
                  <h3 className="slide-title">Lesson Checkpoint</h3>
                  <Quiz
                    quiz={quiz}
                    key={key}
                    continueTillCorrect={true}
                    showDefaultResult={false}
                    onComplete={onCompleteAction}
                    customResultPage={renderCustomResultPage}
                  />
                </div>
              </div>
              <div className="col">IMAGE</div>
            </div>
          </div>

          <div className="slide">
            <div className="row p-3 m-1">
              <div className="col">
                <div>
                  <h3 className="slide-title">Summary</h3>
                  <p>
                    This concludes the Important User Roles module. In this
                    module, we covered key roles responsible for the
                    transactional data that provides the data for financial
                    reports. We also covered the business areas that introduce
                    transactional data into the workflow.
                  </p>
                  <p>You should now be able to:</p>
                  <ul>
                    <li>Identify key user roles</li>
                    <li>Describe the responsibilities of each role</li>
                    <li>
                      Explain how user roles intersect with the end-to-end
                      process
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
              <img src={placeholder} alt="image"></img>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Slides;
