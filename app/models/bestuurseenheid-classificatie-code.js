import Model, { attr } from '@ember-data/model';

export default class BeleidseenheidClassificatieCode extends Model {
  @attr('string') label;
  @attr('string') scopeNote;
  @attr('string') uri;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://www.w3.org/2004/02/skos/core#Concept',
      label: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      scopeNote: 'http://www.w3.org/2004/02/skos/core#scopeNote',
    };
  }
}
