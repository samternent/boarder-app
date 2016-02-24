export default {
  routes: [
    'home',
    'chat',
    'builder'
  ],
  check(route) {
    if (this.routes.indexOf(route)<0) {
      return 'home';
    } else {
      return route;
    }
  }
}
