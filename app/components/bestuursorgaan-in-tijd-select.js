import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),
  bestuursorganen: computed('bestuursorgaan', function() {
    return this.get('bestuursorgaan').get('heeftTijdsspecialisaties');
  }),
  bestuursorganenSortingDesc: Object.freeze(['bindingStart:desc']),
  descSortedBestuursorganen: sort('bestuursorganen', 'bestuursorganenSortingDesc'),

  actions: {
    select(selectedBestuursorgaan) {
      this.set('selectedBestuursorgaan', selectedBestuursorgaan);
      this.router.transitionTo('bestuursorgaan.subject.index', selectedBestuursorgaan.id);
    }
  }
});
