import Controller from '@ember/controller';

export default Controller.extend({
  sort: 'naam',
  actions: {
    download(file) {
      window.location = file;
    },
    selection(row) {
      this.transitionToRoute('bestuur', row.get('id'));
    }
  }
});
