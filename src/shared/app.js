import React from 'react'

import Home from './layouts/home';
import Property from './layouts/property';

// Styles
// import './style'

// Flux
import flux from 'tbg-flux-factory'
import AppStore from './flux/app'

// Components
import Nav from './components/nav';
//
var layouts = {
  'home'    : Home,
  'property': Property
};

// Component
export default class Archie extends React.Component {
  constructor(props) {
      super(props);
      this.state = AppStore.getState();
  }

  componentDidMount () {
      const that = this;
      AppStore.addChangeListener(() => {
        that.setState(AppStore.getState());
      });
    }


    render() {
      const Layout = layouts[ this.state.route ]
      return (
        <div className=''>
          <Nav />
          <Layout />
        </div>
      );
    }
}
