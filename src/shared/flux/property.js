
import Flux from 'tbg-flux-factory';
import axios from 'axios';

export default Flux.createStore({
  name    : 'property',
  data    : {},
  actions: {
    view  : {
      getProperties() {
        axios({
          crossOrigin: true,
          url: 'http://boarder-api.herokuapp.com/property',
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
