export default {
  routes: [
    'home',
    'property',
    'login'
  ],
  check(route) {
    if (this.routes.indexOf(route)<0) {
      return 'home';
    } else {
      return route;
    }
  }
}
