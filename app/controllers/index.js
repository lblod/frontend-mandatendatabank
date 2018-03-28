import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goTo(routeName, id) {
      this.transitionToRoute(routeName, id);
    },
    download(file) {
      window.location = file;
    }
  }
});
