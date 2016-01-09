import React from 'react'

// Styles
// import './style'

// Flux
import Properties from '../apps/properties'
import LocalLink from '../components/local_link'

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
           <Properties />
           <LocalLink route='property111'>fake link to redirect home</LocalLink>
        </div>
      );
    }
}
