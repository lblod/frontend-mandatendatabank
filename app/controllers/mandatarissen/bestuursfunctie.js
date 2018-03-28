import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  bestuursfunctie: computed('bestuursfunctieId', function() {
    if (this.get('bestuursfunctieId'))
      return this.get('store').findRecord('bestuursfunctie-code', this.get('bestuursfunctieId'));
    else
      return null;
  })
});
