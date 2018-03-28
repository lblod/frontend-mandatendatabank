import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import DefaultMandatarisTableParamsMixin from '../../mixins/default-mandataris-table-params';

export default Controller.extend(DefaultMandatarisTableParamsMixin, {
  store: service(),
  fractie: computed('fractieId', function() {
    if (this.get('fractieId'))
      return this.get('store').findRecord('fractie', this.get('fractieId'));
    else
      return null;
  })
});
