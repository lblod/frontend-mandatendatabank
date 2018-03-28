import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';

export default ScopedMandatarissenController.extend({
  beleidsdomein: computed('beleidsdomeinId', function() {
    if (this.get('beleidsdomeinId'))
      return this.get('store').findRecord('beleidsdomein-code', this.get('beleidsdomeinId'));
    else
      return null;
  })
});
