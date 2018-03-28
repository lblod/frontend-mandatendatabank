import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import DefaultMandatarisTableParamsMixin from '../../mixins/default-mandataris-table-params';

export default Controller.extend(DefaultMandatarisTableParamsMixin, {
  store: service(),
  beleidsdomein: computed('beleidsdomeinId', function() {
    if (this.get('beleidsdomeinId'))
      return this.get('store').findRecord('beleidsdomein-code', this.get('beleidsdomeinId'));
    else
      return null;
  })
});
