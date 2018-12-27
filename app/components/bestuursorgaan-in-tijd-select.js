import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias, sort } from '@ember/object/computed';

export default Component.extend({
  router: service(),
  bestuursorganen: alias('model.heeftTijdsspecialisaties'),
  bestuursorganenSortingDesc: Object.freeze(['bindingStart:desc']),
  descSortedBestuursorganen: sort('bestuursorganen', 'bestuursorganenSortingDesc'),
  selectedBestuursorgaan: alias('lastMandaat'),

  actions: {
    select(selectedBestuursorgaan) {
      this.set('selectedBestuursorgaan', selectedBestuursorgaan);
      this.router.transitionTo('bestuursorgaan.subject.index', selectedBestuursorgaan.id);
    },
  }
});
