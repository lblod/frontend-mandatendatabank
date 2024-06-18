import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Bestuursorgaan extends Model {
  @attr uri;
  @attr naam;
  @attr('date') bindingStart;
  @attr('date') bindingEinde;
  @belongsTo('bestuurseenheid', { inverse: null }) bestuurseenheid;
  @belongsTo('bestuursorgaan-classificatie-code', { inverse: null })
  classificatie;
  @belongsTo('bestuursorgaan', { inverse: null }) isTijdsspecialisatieVan;
  @belongsTo('rechtstreekse-verkiezing', { inverse: null })
  wordtSamengesteldDoor;
  @hasMany('bestuursorgaan', { inverse: null }) heeftTijdsspecialisaties;
  @hasMany('mandaat', { inverse: null }) bevat;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      naam: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      class: 'http://data.vlaanderen.be/ns/besluit#Bestuursorgaan',
      bindingStart: 'http://data.vlaanderen.be/ns/mandaat#bindingStart',
      bindingEinde: 'http://data.vlaanderen.be/ns/mandaat#bindingEinde',
      bestuurseenheid: 'http://data.vlaanderen.be/ns/besluit#bestuurt',
      classificatie: 'http://data.vlaanderen.be/ns/besluit#classificatie',
      isTijdsspecialisatieVan:
        'http://data.vlaanderen.be/ns/mandaat#isTijdspecialisatieVan',
      bevat: 'http://www.w3.org/ns/org#hasPost',
    };
  }
}
