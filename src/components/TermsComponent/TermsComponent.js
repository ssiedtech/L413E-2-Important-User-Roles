import React from 'react';
import './TermsComponent.css';

class TermsComponent extends React.Component {
  state = {
    term: 'DCAS',
    definition: 'Defense Cash Accountability System; DFAS system responsible for processing cash transactions and treasury reporting for various Department of Defense agencies.'
  };

  onClickButton1 = () => {
    this.setState({
      term: 'DCAS',
      definition: 'Defense Cash Accountability System; DFAS system responsible for processing cash transactions and treasury reporting for various Department of Defense agencies.'
    });
  };

  onClickButton2 = () => {
    this.setState({
      term: 'DDRS',
      definition: 'Defense Departmental Reporting System; DFAS financial reporting system, which uses the Standard Financial Information Structure (SFIS).'
    });
  };

  onClickButton3 = () => {
    this.setState({
      term: 'ECC',
      definition:' ERP Central Component; The portion of GFEBS representing the transactional accounting system. ECC possesses reporting functionality.'
    });
  };

  onClickButton4 = () => {
    this.setState({
      term: 'BI',
      definition:'Business Intelligence; Industry term referring to reporting systems that provide advanced reporting and analysis capabilities such as slicing and dicing data. Typically, transaction data captures in GFEBS ECC get sent to GFEBS BI to utilize its additional reporting features.'
    });
  };



  render() {
    return (
      <div className='terms-container-row'>
        <div className='definition-container'>
          <p>{this.state.term}</p>
          <p>{this.state.definition}</p>
        </div>
        <div className='terms-container-column'>
          <button className='terms-button' onClick={this.onClickButton1}>
            DCAS
          </button>
          <button className='terms-button' onClick={this.onClickButton2}>
            DDRS
          </button>
          <button className='terms-button' onClick={this.onClickButton3}>
            ECC
          </button>
          <button className='terms-button' onClick={this.onClickButton4}>
            Real-time
          </button>
       
        </div>
      </div>
    );
  }
}

export default TermsComponent;
