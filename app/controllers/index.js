import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    download(file) {
      window.location = file;
    }
  }
});
