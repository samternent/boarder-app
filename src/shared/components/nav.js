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

  renderLogin() {
    if (this.props.user.logged_in) {
      return <div>
        <i className='fa fa-user green archie__logo__icon' />
        <span className='archie__logo__text'>{ `Logged in as ${this.props.user.email}` }</span>
      </div>
    }
    return (
      <LocalLink route='login' currentRoute={ this.props.currentRoute }>
        <i className='fa fa-user blue archie__logo__icon' />
        <span className='archie__logo__text'>Login</span>
      </LocalLink>
    );
  }

  render() {
    return (
        <div className='archie-menu'>
          <div className='contain'>
            <div className='archie__logo'>

              <LocalLink route='home' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-home red archie__logo__icon' />
                <span className='archie__logo__text'>boarder app</span>
              </LocalLink>

            </div>
            <ul className='archie-menu-items'>
              <li className='archie-menu-item'>
                { this.renderLogin() }
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

Nav.propTypes = { user: React.PropTypes.object };
Nav.defaultProps = { user: {} };
