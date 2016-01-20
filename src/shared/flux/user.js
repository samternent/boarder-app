
import Flux from 'tbg-flux-factory';
import axios from 'axios';

export default Flux.createStore({
  name    : 'user',
  data    : {
    token: null,
    expires: null,
    id: null,
    user: null,
    email: null,
    logged_in: false
  },
  actions: {
    view  : {
      getUserSession() {
        const user_state = JSON.parse(localStorage.getItem('jwt'));
        this.setState(user_state);
      },
      login(params) {
        axios({
          crossOrigin: true,
          url: 'http://localhost:1337/auth/login',
          // url: 'http://boarder-api.herokuapp.com/auth/login',
          method: 'post',
          data: params
        })
        .then((resp) => {
          const user_state = {
            token: resp.data.token,
            expires: resp.data.expires,
            id: resp.data.user.id,
            email: resp.data.user.auth.email,
            logged_in: true
          };

          localStorage.setItem('jwt', JSON.stringify(user_state))
          this.setState(user_state);
        })
      },
      logout() {
        axios({
          crossOrigin: true,
          url: 'http://localhost:1337/auth/logout',
          // url: 'http://boarder-api.herokuapp.com/auth/logout',
          method: 'post'
        })
        .then((resp) => {
          localStorage.removeItem('jwt')
          this.setState({
            token: null,
            expires: null,
            id: null,
            user: {},
            email: null,
            logged_in: false
          });
        })
      }
    },
    server: {
    }
  }
});
