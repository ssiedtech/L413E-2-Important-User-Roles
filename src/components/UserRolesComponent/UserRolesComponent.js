import React, { Component } from "react";
import './UserRolesComponent.css'


export default class UserRolesComponent extends Component {
  state = {
    term: "DCAS",
    definition:
      "Defense Cash Accountability System; DFAS system responsible for processing cash transactions and treasury reporting for various Department of Defense agencies.",
  };

  onClickButton1 = () => {
    this.setState({
      term: "DCAS",
      definition:
        "Defense Cash Accountability System; DFAS system responsible for processing cash transactions and treasury reporting for various Department of Defense agencies.",
    });
  };

  onClickButton2 = () => {
    this.setState({
      term: "DDRS",
      definition:
        "Defense Departmental Reporting System; DFAS financial reporting system, which uses the Standard Financial Information Structure (SFIS).",
    });
  };

  onClickButton3 = () => {
    this.setState({
      term: "ECC",
      definition:
        " ERP Central Component; The portion of GFEBS representing the transactional accounting system. ECC possesses reporting functionality.",
    });
  };

 

  render() {
    return (
      <div>
        <div >
          
          <div className="graphic-container"> 
            <img src = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" alt = "BIAndvancedExpert" className="graphic" onClick={this.onClickButton1}/>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" alt = "BI Financial Reporter" className="graphic" onClick={this.onClickButton2}/>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" alt = "Cash Balancing Approver" className="graphic" onClick={this.onClickButton3}/>
          </div>
          <div className="graphic-container-definition">
            <h3>{this.state.term}</h3>
            <p>{this.state.definition}</p>
          </div>
        </div>
      </div>
    );
  }
}
