import React from 'react';

// Flux
import UserStore from '../flux/user'

// Component
export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        email: null,
        password: null
      };
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e) {
    e.preventDefault();
    UserStore.Actions.login(this.state);
  }

  render() {
    return (
        <div className='contain content'>
           <form>
             <input onChange={ this.updateEmail.bind(this) } type='text' placeholder='Email' />
             <input onChange={ this.updatePassword.bind(this) } type='password' placeholder='Password' />
             <button onClick={ this.handleLogin.bind(this) }>Login</button>
           </form>
        </div>
      );
    }
}
