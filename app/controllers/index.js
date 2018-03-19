import Controller from '@ember/controller';

export default Controller.extend({
  sort: 'naam',
  actions: {
    selection(row) {
      this.transitionToRoute('bestuur', row.get('id'));
    }
  }
});
