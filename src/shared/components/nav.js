import React from 'react';
import canUseDOM from 'can-use-dom';

// Styles
if (canUseDOM) { require('../../style/nav'); }

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
    UserStore.Actions.logout();
  }

  renderLogin() {
    if (this.props.user.logged_in) {
      return (
        <div className='pointer' onClick={ this.handleLogoutClick.bind(this) }>
          <i className='fa fa-user green archie__logo__icon' />
          <span className='archie__logo__text--logout' >{ `logout ${this.props.user.email}` }</span>
        </div>
      );
    }
    return (
      <div>
        <i className='fa fa-user red archie__logo__icon' />
      </div>
    );
  }

  render() {
    return (
        <div className='archie-menu'>
          <div className='contain'>
            <div className='archie__logo'>

              <LocalLink route='home' currentRoute={ this.props.currentRoute }>
                <i className='fa fa-compass blue archie__logo__icon' />
                <span className='archie__logo__text'></span>
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
