import ScopedMandatarissenController from './scoped-mandatarissen';
import { computed } from '@ember/object';

export default ScopedMandatarissenController.extend({
  orgaan: computed('orgaanId', function() {
    if (this.get('orgaanId'))
      return this.get('store').findRecord('bestuursorgaan', this.get('orgaanId'), { include: 'classificatie,bestuurseenheid' });
    else
      return null;
  })
});
