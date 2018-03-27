import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  naam: attr(),
  bindingStart: attr('date'),
  bindingEinde: attr('date'),
  bestuurseenheid: belongsTo('bestuurseenheid', { inverse: 'bestuursorgaan' }),
  classificatie: belongsTo('bestuursorgaan-classificatie-code', { inverse: null }),
  isTijdsspecialisatieVan: belongsTo('bestuursorgaan', { inverse: 'heeftTijdsspecialisaties' }),
  wordtSamengesteldDoor: belongsTo('rechtstreekse-verkiezing', { inverse: 'steltSamen' }),
  heeftTijdsspecialisaties: hasMany('bestuursorgaan', { inverse: 'isTijdsspecialisatieVan' }),
  bevat: hasMany('mandaat', { inverse: 'bevatIn' })
});
