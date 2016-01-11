import React from 'react'

import Home from './layouts/home';
import Property from './layouts/property';
import Login from './layouts/login';

// Styles
// import './style'

// Flux
import flux from 'tbg-flux-factory'
import AppStore from './flux/app'
import UserStore from './flux/user'

// Components
import Nav from './components/nav';
import Tray from './components/tray';
//
var layouts = {
  'home'    : Home,
  'property': Property,
  'login': Login
};

// Component
export default class Archie extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        app: AppStore.getState(),
        user: UserStore.getState()
      };
  }

  componentDidMount () {
      const that = this;
      AppStore.addChangeListener(() => {
        that.setState({app: AppStore.getState()});
      });
      UserStore.addChangeListener(() => {
        that.setState({user: UserStore.getState()});
      });

      UserStore.Actions.getUserSession()
    }


    render() {
      const Layout = layouts[ this.state.app.route ]
      return (
        <div className=''>
          <Nav currentRoute={ this.state.route } user={ this.state.user }/>
          <Tray />
          <Layout />
        </div>
      );
    }
}
