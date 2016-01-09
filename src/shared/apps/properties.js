import React from 'react'

// Flux
import PropertyStore from '../flux/property'

// Components

// Component
export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        PropertyStore.Actions.getProperties()
        this.state = {
          properties: []
        };

        this.doPropertyChange = this.handlePropertyChange.bind(this);
    }

    componentWillMount() {
      PropertyStore.addChangeListener(this.doPropertyChange)
    }

    handlePropertyChange() {
      this.setState(PropertyStore.getState())
    }

    renderProperties() {
      return this.state.properties.map((property, i) => {
        return <div key={ `property_${i}` }>
          <h2>{ property.name }</h2>
          <div>{ `${property.rooms} rooms` }</div>
          <div>{ `£${property.rent} pcm` }</div>
        </div>
      })
    }
    render() {
      return (
          <div className='properties'>
           { this.renderProperties() }
          </div>
        );
      }
}
