import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default ScopedMandatarissenController.extend({
  store: service(),
  bestuurseenheid: computed('bestuurseenheidId', function() {
    if (this.get('bestuurseenheidId'))
      return this.get('store').findRecord('bestuurseenheid', this.get('bestuurseenheidId'), { include: 'classificatie' });
    else
      return null;
  })
});
