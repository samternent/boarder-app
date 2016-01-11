import React from 'react'

// Styles
// import './style'

// Flux

// Components

// Component
export default class Payment extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }


  render() {
    return (
        <div className=''>
           <h2>Payments</h2>
           <p>
             You can manage all of your payments here, view a payment history, set payment date.
           </p>
           <p>
             We'll have payments set up with stripe. Tennants can set up a recurring paymeent on the day of their choice.
           </p>
        </div>
      );
    }
}
