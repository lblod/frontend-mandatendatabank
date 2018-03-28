import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  orgaan: computed('orgaanId', function() {
    if (this.get('orgaanId'))
      return this.get('store').findRecord('bestuursorgaan', this.get('orgaanId'), { include: 'classificatie,bestuurseenheid' });
    else
      return null;
  })
});
