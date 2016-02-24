import React from 'react'

// Flux
import AppStore from '../flux/app'


// Components

// Component
export default class LocalLink extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  _handleClick (e) {
    e.preventDefault();
    AppStore.Actions.setRoute(this.props.route);
  }

  isActive() {
    if (this.props.route === this.props.currentRoute) {
      return 'is-active'
    }
    return '';
  }

  render() {
    return (
        <a
          className={ `local-link ${this.isActive()}` }
          href={ this.props.route }
          onClick={ this._handleClick.bind(this) }
        >
          { this.props.children }
        </a>
      );
    }
}
