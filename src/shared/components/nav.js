import React from 'react'

// Components
import LocalLink from './local_link'
import UserStore from '../flux/user'

// Component
export default class Nav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  handleLogoutClick(e) {
    e.preventDefault();
    UserStore.Actions.logout();
  }

  renderLogin() {
    if (this.props.user.logged_in) {
      return (
        <div>
          <i className='fa fa-user green archie__logo__icon' />
          <span className='archie__logo__text' onClick={ this.handleLogoutClick.bind(this) }>{ `logout ${this.props.user.email}` }</span>
        </div>
      );
    }
    return (
      <div>
        <i className='fa fa-user blue archie__logo__icon' />
        <span className='archie__logo__text'>Login</span>
      </div>
    );
  }

  render() {
    return (
        <div className='archie-menu'>
          <div className='contain'>
            <div className='archie__logo'>

              <LocalLink route='home' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-compass red archie__logo__icon' />
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
