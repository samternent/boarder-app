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
    if (this.props.user.email) { return null; }
    return (
        <div className='login'>
           <form>
             
             <input className='login__input login__input--email' onChange={ this.updateEmail.bind(this) } type='text' placeholder='Email' />
             <input className='login__input login__input--password' onChange={ this.updatePassword.bind(this) } type='password' placeholder='Password' />
             <button className='login__input login__input--submit' onClick={ this.handleLogin.bind(this) }>Login</button>
           </form>
        </div>
      );
    }
}
