import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  naam: attr(),
  bestuurseenheid: belongsTo('bestuurseenheid', { inverse: 'bestuursorgaan' }),
  classificatie: belongsTo('bestuursorgaan-classificatie-code', { inverse: null }),
  bindingStart: attr('date'),
  bindingEinde: attr('date'),
  gespecialiseerdBestuursorgaan: belongsTo('bestuursorgaan', { inverse: null })
});
