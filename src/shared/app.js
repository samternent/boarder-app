import React from 'react';
import canUseDOM from 'can-use-dom';

import Home from './layouts/home';
import Builder from './layouts/builder';;
import Chat from './layouts/chat';

// Styles
if (canUseDOM) { require('../style/app'); }

// Flux
import flux from 'tbg-flux-factory'
import AppStore from './flux/app'
import UserStore from './flux/user'



// Components
import Nav from './components/nav';
import Tray from './components/tray';
import Login from './components/login';
//
var layouts = {
  'home'    : Home,
  'chat': Chat,
  'builder': Builder
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
        <div className='main-wrapper'>
          <Nav currentRoute={ this.state.app.route } user={ this.state.user }/>
          <Tray currentRoute={ this.state.app.route } />
          <div className='wrapper'>
            <Login user={ this.state.user } />
            <div className='layout'>
              <Layout key={ this.state.app.route } />
            </div>
          </div>
        </div>
      );
    }
}
