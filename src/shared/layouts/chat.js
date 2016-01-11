import React from 'react'

// Styles
// import './style'

// Flux

// Components

// Component
export default class Chat extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }


  render() {
    return (
        <div className='contain content'>
           <h2>Chat</h2>
           <p>
             Chat client; chat with your tennants, track home issues, requests... or just check your tennant is happy :)
           </p>
        </div>
      );
    }
}
