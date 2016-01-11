import React from 'react'

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
          <ul className='archie-tray__items'>
            <li className='archie-tray__item'>
              <LocalLink route='property' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-home white' />
              </LocalLink>
            </li>
            <li className='archie-tray__item'>
              <LocalLink route='payment' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-gbp white' />
              </LocalLink>
            </li>
            <li className='archie-tray__item'>
              <LocalLink route='docs' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-file-text-o white' />
              </LocalLink>
            </li>
            <li className='archie-tray__item'>
              <LocalLink route='chat' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-comment white' />
              </LocalLink>
            </li>
          </ul>
        </div>
      );
    }
}
