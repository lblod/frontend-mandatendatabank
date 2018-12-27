import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    transitionToSubject(id) {
      this.router.transitionTo('bestuursorgaan.subject.index', id);
    }
  }
});
