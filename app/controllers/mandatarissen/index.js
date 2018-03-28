import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default ScopedMandatarissenController.extend({
  store: service(),
  optionsMenuSize: 100,

  bestuurseenheid: computed('bestuurseenheidId', function() {
    if (this.get('bestuurseenheidId'))
      return this.get('store').findRecord('bestuurseenheid', this.get('bestuurseenheidId'), { include: 'classificatie' });
    else
      return null;
  }),

  beleidsdomeinOptions: computed('bestuurseenheidId', 'optionsMenuSize', function() {
    return this.get('store').query('beleidsdomein-code', {
      'filter[mandatarissen][bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][id]': this.get('bestuurseenheidId'),
      'page[size]': this.get('optionsMenuSize')
    });
  }),

  actions: {
    filter(property, value) {
      this.set(property, value);
      this.set(`${property}Id`, value ? value.get('id') : undefined);
      this.set('page', 0);
    },
    resetFilters() {
      ['beleidsdomein'].forEach((property) => {
        this.set(property, undefined);
        this.set(`${property}Id`, undefined);
        this.set('page', 0);
      });
    }
  }
});
