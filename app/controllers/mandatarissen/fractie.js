import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';

export default ScopedMandatarissenController.extend({
  fractie: computed('fractieId', function() {
    if (this.get('fractieId'))
      return this.get('store').findRecord('fractie', this.get('fractieId'));
    else
      return null;
  })
});
