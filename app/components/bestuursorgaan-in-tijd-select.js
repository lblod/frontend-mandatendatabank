import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),
  bestuursorganen: computed('bestuursorgaan', function() {
    if(this.get('bestuursorgaan')) {
      return this.get('bestuursorgaan').get('heeftTijdsspecialisaties');
    }
  }),
  bestuursorganenSortingDesc: Object.freeze(['bindingStart:desc']),
  descSortedBestuursorganen: sort('bestuursorganen', 'bestuursorganenSortingDesc'),

  async didReceiveAttrs() {
    this._super(...arguments);
    const isTijdsspecialisatieVan = await this.selectedBestuursorgaan.isTijdsspecialisatieVan;
    this.set('bestuursorgaan', isTijdsspecialisatieVan);
  },

  actions: {
    select(selectedBestuursorgaan) {
      this.set('selectedBestuursorgaan', selectedBestuursorgaan);
      this.router.transitionTo('bestuursorgaan.subject.index', selectedBestuursorgaan.id);
    }
  }
});
