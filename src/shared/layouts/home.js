import React from 'react'

// Styles
// import './style'

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
           <LocalLink route='property'>Property page</LocalLink>
        </div>
      );
    }
}
