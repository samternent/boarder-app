import React from 'react'

// Styles
// import './style'

// Flux
import Properties from '../apps/properties'

// Components

// Component
export default class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }


  render() {
    return (
        <div className='contain content'>
          <h2>Property</h2>
          <p>
            This component hits <a href="http://boarder-api.herokuapp.com/property">boarder-api.herokuapp.com</a> to get some property data
          </p>
          <Properties />
        </div>
      );
    }
}
