import React from 'react';
import canUseDOM from 'can-use-dom';

// Styles
if (canUseDOM) { require('../../style/properties'); }

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
    componentWillUnmount() {
      PropertyStore.removeChangeListener(this.doPropertyChange)
    }

    handlePropertyChange() {
      this.setState(PropertyStore.getState())
    }

    renderProperties() {
      return this.state.properties.map((property, i) => {
        return (
          <div key={ `property_${i}` } className='property__container pure-u-1 pure-u-md-1-2 pure-u-lg-1-3' >
            <div className='property'>
              <h3 className='property__title' >{ property.name }</h3>
              <img className='property__image' src='https://www.fillmurray.com/350/150' />
              <div className='property__rooms'>{ `${property.rooms} rooms` }</div>
              <div className='property__rent'>{ `£${property.rent} pcm` }</div>
            </div>
          </div>
        );
      })
    }
    render() {
      return (
          <div className='properties pure-g'>
            { this.renderProperties() }
          </div>
        );
      }
}
