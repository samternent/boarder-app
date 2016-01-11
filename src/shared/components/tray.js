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
        <div className='archie-tray'>
          <ul className='archie-tray__items'>
            <li className='archie-tray__item'>
              <LocalLink route='property' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-gbp white' />
              </LocalLink>
            </li>
          </ul>
        </div>
      );
    }
}
