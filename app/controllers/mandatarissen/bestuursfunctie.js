import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import DefaultMandatarisTableParamsMixin from '../../mixins/default-mandataris-table-params';

export default Controller.extend(DefaultMandatarisTableParamsMixin, {
  store: service(),
  bestuursfunctie: computed('bestuursfunctieId', function() {
    if (this.get('bestuursfunctieId'))
      return this.get('store').findRecord('bestuursfunctie-code', this.get('bestuursfunctieId'));
    else
      return null;
  })
});
