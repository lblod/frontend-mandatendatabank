import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BeleidseenheidClassificatieCode extends Model {
  @attr naam;
  @belongsTo('werkingsgebied', { async: true, inverse: null }) werkingsgebied;
  @belongsTo('bestuurseenheid-classificatie-code', {
    async: true,
    inverse: null,
  })
  classificatie;
  @hasMany('contact-punt', { async: true, inverse: null }) contactinfo;
  @hasMany('bestuursorgaan', { async: true, inverse: null }) bestuursorgaan;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      naam: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      class: 'http://data.vlaanderen.be/ns/besluit#Bestuurseenheid',
      werkingsgebied: 'http://data.vlaanderen.be/ns/besluit#werkingsgebied',
      bestuursorgaan: 'http://data.vlaanderen.be/ns/besluit#bestuurt',
      classificatie: 'http://data.vlaanderen.be/ns/besluit#classificatie',
    };
  }
}
