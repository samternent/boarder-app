export default {
  routes: [
    'home',
    'property'
  ],
  check(route) {
    if (this.routes.indexOf(route)<0) {
      return 'home';
    } else {
      return route;
    }
  }
}
