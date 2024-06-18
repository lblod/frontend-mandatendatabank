import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Mandaat extends Model {
  @attr uri;
  @attr aantalHouders;
  @belongsTo('bestuursfunctie-code', {
    async: true,
    inverse: null,
  })
  bestuursfunctie;
  @hasMany('bestuursorgaan', {
    async: true,
    inverse: null,
  })
  bevatIn;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://data.vlaanderen.be/ns/mandaat#Mandaat',
      aantalHouders: 'http://data.vlaanderen.be/ns/mandaat#aantalHouders',
      bestuursfunctie: 'http://www.w3.org/ns/org#role',
      bevatIn: 'http://www.w3.org/ns/org#hasPost',
    };
  }
}
