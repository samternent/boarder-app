export default {
  routes: [
    'home',
    'property',
    'chat',
    'payment',
    'docs'
  ],
  check(route) {
    if (this.routes.indexOf(route)<0) {
      return 'home';
    } else {
      return route;
    }
  }
}
