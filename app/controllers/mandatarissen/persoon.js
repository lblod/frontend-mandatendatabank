import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import DefaultMandatarisTableParamsMixin from '../../mixins/default-mandataris-table-params';

export default Controller.extend(DefaultMandatarisTableParamsMixin, {
  store: service(),
  persoon: computed('persoonId', function() {
    if (this.get('persoonId'))
      return this.get('store').findRecord('persoon', this.get('persoonId'), { include: 'geslacht' });
    else
      return null;
  })
});
