import Model, { attr } from '@ember-data/model';

export default class BeleidsdomeinCodeModel extends Model {
  @attr('string') uri;
  @attr('string') label;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://www.w3.org/2004/02/skos/core#Concept',
      label: 'http://www.w3.org/2004/02/skos/core#prefLabel',
    };
  }
}
