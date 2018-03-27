import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  store: service(),
  bestuurseenheid: computed('bestuurseenheidId', function() {
    if (this.get('bestuurseenheidId'))
      return this.get('store').findRecord('bestuurseenheid', this.get('bestuurseenheidId'), { include: 'classificatie' });
    else
      return null;
  })
});
