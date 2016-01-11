import React from 'react'

// Styles
// import './style'

// Flux

// Components

// Component
export default class Docs extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }


  render() {
    return (
        <div className='contain content'>
           <h2>Documents</h2>
           <p>
             Here you can upload all important documents you need.
           </p>
           <p>
             You can tag all documents and images to categories for filters and property linking.
             Use this to store Right To Rent etc.
           </p>
        </div>
      );
    }
}
