import Model, { attr, hasMany } from '@ember-data/model';

export default class Werkingsgebied extends Model {
  @attr('string') uri;
  @attr('string') naam;
  @attr('string') niveau;
  @hasMany('bestuurseenheid', { inverse: null }) bestuurseenheid;

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
