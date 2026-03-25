import Model, { attr } from '@ember-data/model';

export default class BeleidsdomeinCodeModel extends Model {
  @attr uri;
  @attr label;

  get rdfaBindings() {
    return {
      class: 'http://www.w3.org/2004/02/skos/core#Concept',
      label: 'http://www.w3.org/2004/02/skos/core#prefLabel',
    };
  }
}
