import React from 'react';

// Flux
import Properties from '../apps/properties'

// Components
import LocalLink from '../components/local_link'

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
           This is the home page, I'll use this for a dashboard
        </div>
      );
    }
}
