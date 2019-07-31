import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { reads, sort } from '@ember/object/computed';

export default Component.extend({
  router: service(),
  fastboot: service(),

  isFastBoot: reads('fastboot.isFastBoot'),
  bestuursorganenSortingDesc: Object.freeze(['bindingStart:desc']),
  descSortedBestuursorganen: sort('bestuursorgaan.heeftTijdsspecialisaties', 'bestuursorganenSortingDesc'),

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
