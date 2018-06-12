import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  vestigingsadres: belongsTo('contact-punt', { inverse: null })
});
