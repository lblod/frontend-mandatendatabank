import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  uri: attr(),
  aantalHouders: attr(),
  bestuursfunctie: belongsTo('bestuursfunctie-code', { inverse: null }),
  bevatIn: belongsTo('bestuursorgaan', { inverse: 'bevat' }),

  rdfaBindings: { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    class: "http://data.vlaanderen.be/ns/mandaat#Mandaat",
    aantalHouders: "http://data.vlaanderen.be/ns/mandaat#aantalHouders",
    bestuursfunctie: "http://www.w3.org/ns/org#role",
    bevatIn: "http://www.w3.org/ns/org#hasPost"
  }
});
