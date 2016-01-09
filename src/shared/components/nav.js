import React from 'react'

// Components
import LocalLink from './local_link'

// Component
export default class Nav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  _handleClick (e) {
    e.preventDefault();
    app.Actions.setRoute(this.props.route);
  }

  render() {
    return (
        <div className='archie-menu'>
          <div className='contain'>
            <div className='archie__logo'>

              <LocalLink route='home'>
                <i className='fa fa-heart red archie__logo__icon' />
                <span className='archie__logo__text'>boarder</span>
              </LocalLink>

            </div>
          </div>
        </div>
      );
    }
}
