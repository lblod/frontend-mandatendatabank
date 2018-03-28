import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';

export default ScopedMandatarissenController.extend({
  bestuursfunctie: computed('bestuursfunctieId', function() {
    if (this.get('bestuursfunctieId'))
      return this.get('store').findRecord('bestuursfunctie-code', this.get('bestuursfunctieId'));
    else
      return null;
  })
});
