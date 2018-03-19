import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  naam: attr(),
  werkingsgebied: attr(),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: 'bestuurseenheid' }),
  classificatie: belongsTo('bestuurseenheid-classificatie-code', { inverse: null })
});
