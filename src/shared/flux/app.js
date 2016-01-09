import flux from 'tbg-flux-factory';
import routes from '../routes';


export default flux.createStore({
  name: 'app',
  data: {
    route           : 'home',
    logged_in       : false
  },
  actions: {
    view: {
      setRoute: function (route) {
        route = routes.check(route);
        
        if (this.data.route !== route) {
          history.pushState({ route: route }, null, route);
        }
        this.setState({ route: route });
      }
    },
    server: {}
  }
});
