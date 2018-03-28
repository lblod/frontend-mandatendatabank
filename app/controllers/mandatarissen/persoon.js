import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';

export default ScopedMandatarissenController.extend({
  persoon: computed('persoonId', function() {
    if (this.get('persoonId'))
      return this.get('store').findRecord('persoon', this.get('persoonId'), { include: 'geslacht' });
    else
      return null;
  })
});
