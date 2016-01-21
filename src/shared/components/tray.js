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
          <ul className='tray__items'>
            <li className='tray__item'>
              <LocalLink route='property' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-home' />
                <span className='tray__item__label'>Properties</span>
              </LocalLink>
            </li>
            <li className='tray__item'>
              <LocalLink route='payment' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-gbp' />
                <span className='tray__item__label'>Payments</span>
              </LocalLink>
            </li>
            <li className='tray__item'>
              <LocalLink route='docs' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-file-text-o' />
                <span className='tray__item__label'>Documents</span>
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
