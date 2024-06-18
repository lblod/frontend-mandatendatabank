import Model, { attr, hasMany } from '@ember-data/model';

export default class Werkingsgebied extends Model {
  @attr uri;
  @attr naam;
  @attr niveau;
  @hasMany('bestuurseenheid', {
    async: true,
    inverse: null,
  })
  bestuurseenheid;

  get longName() {
    let niveau = this.niveau;
    let naam = this.naam;
    return `${naam} (${niveau})`;
  }

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'prov:Location',
      naam: 'rdfs:label',
    };
  }
}
