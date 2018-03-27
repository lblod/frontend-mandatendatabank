import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  beleidsdomein: computed('beleidsdomeinId', function() {
    if (this.get('beleidsdomeinId'))
      return this.get('store').findRecord('beleidsdomein-code', this.get('beleidsdomeinId'));
    else
      return null;
  })
});
