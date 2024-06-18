import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Persoon extends Model {
  @attr uri;
  @attr achternaam;
  @attr alternatieveNaam;
  @attr gebruikteVoornaam;
  @belongsTo('geboorte', {
    async: true,
    inverse: null,
  })
  geboorte;
  @belongsTo('identificator', {
    async: true,
    inverse: null,
  })
  identificator;
  @belongsTo('geslacht-code', {
    async: true,
    inverse: null,
  })
  geslacht;
  @hasMany('mandataris', {
    async: true,
    inverse: null,
  })
  isAangesteldAls;
  @hasMany('kandidatenlijst', {
    async: true,
    inverse: null,
  })
  isKandidaatVoor;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://www.w3.org/ns/person#Person',
      achternaam: 'http://xmlns.com/foaf/0.1/familyName',
      gebruikteVoornaam:
        'http://data.vlaanderen.be/ns/persoon#gebruikteVoornaam',
      alternatieveNaam: 'http://xmlns.com/foaf/0.1/name',
      geslacht: 'http://data.vlaanderen.be/ns/persoon#geslacht',
      isAangesteldAls: 'http://data.vlaanderen.be/ns/mandaat#isAangesteldAls',
      geboorte: 'http://data.vlaanderen.be/ns/persoon#heeftGeboorte',
    };
  }
}
