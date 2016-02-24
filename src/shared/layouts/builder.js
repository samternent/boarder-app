import React from 'react'
import canUseDOM from 'can-use-dom';

// Styles
if (canUseDOM) { require('../../style/builder'); }

// Flux

// Components
import Radio from '../components/radio'
import Title from '../components/title'
import Text from '../components/text'

const Components = { Radio, Title, Text }

// Component
export default class Docs extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        components: []
      };
  }


  handleAddComponent(name, e) {
    e.preventDefault();
    let components = this.state.components;
    components.push(
      React.createElement(
        Components[name],
        { key: `component_${components.length}` }
      )
    )

    this.setState({
      components
    })
  }

  renderPreview() {
    let components = this.state.components.map((comp, i) => {
      return comp
    });
    return (
      <div className='builder__preview'>
        { components }
      </div>
    );
  }

  render() {
    return (
        <div className='contain content builder pure-g'>
           <h2>Builder</h2>
           <div className='pure-u-1 pure-u-md-1-6'>
             <ul className='builder__items'>
              <li className='builder__item'>
                <a
                  className='builder__item__link'
                  href='#'
                  onClick={ this.handleAddComponent.bind(this, 'Title') }
                > Add Title </a>
              </li>
              <li className='builder__item'>
                <a
                  className='builder__item__link'
                  href='#'
                  onClick={ this.handleAddComponent.bind(this, 'Text') }
                > Add Text </a>
              </li>
              <li className='builder__item'>
                <a
                  className='builder__item__link'
                  href='#'
                  onClick={ this.handleAddComponent.bind(this, 'Radio') }
                > Add Radios </a>
              </li>
             </ul>
           </div>
           <div className='pure-u-1 pure-u-md-5-6'>
            { this.renderPreview() }
           </div>
        </div>
      );
    }
}
