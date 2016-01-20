
import Flux from 'tbg-flux-factory';
import axios from 'axios';

export default Flux.createStore({
  name    : 'property',
  data    : {},
  actions: {
    view  : {
      getProperties() {
        console.log(Flux.getStore('user').data.token)
        axios({
          crossOrigin: true,
          url: 'http://localhost:1337/property',
          // url: 'http://boarder-api.herokuapp.com/property',
          method: 'get'
        })
        .then(this.Actions.handleProperties)
      }
    },
    server: {
      handleProperties(resp) {
        this.setState({properties: resp.data})
      }
    }
  }
});
