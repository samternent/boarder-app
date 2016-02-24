import React from 'react';
import canUseDOM from 'can-use-dom'

// Styles
if (canUseDOM) { require('../../style/tray') }

// Components
import LocalLink from './local_link'

// Component
export default class Tray extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
    return (
        <div className='tray'>
          <div className='tray__logo'>
            <i className='fa fa-compass tray__logo__icon' />
            <div className='tray__logo__text'>archie-app</div>
          </div>
          <ul className='tray__items'>
            <li className='tray__item'>
              <LocalLink route='builder' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-home' />
                <span className='tray__item__label'>Builder</span>
              </LocalLink>
            </li>
            <li className='tray__item'>
              <LocalLink route='chat' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-comment' />
                <span className='tray__item__label'>Chat</span>
              </LocalLink>
            </li>
          </ul>
        </div>
      );
    }
}
