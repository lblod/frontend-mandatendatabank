import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import DefaultMandatarisTableParamsMixin from '../../mixins/default-mandataris-table-params';

export default Controller.extend(DefaultMandatarisTableParamsMixin, {
  store: service(),
  orgaan: computed('orgaanId', function() {
    if (this.get('orgaanId'))
      return this.get('store').findRecord('bestuursorgaan', this.get('orgaanId'), { include: 'classificatie,bestuurseenheid' });
    else
      return null;
  })
});
