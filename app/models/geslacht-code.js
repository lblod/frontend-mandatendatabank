import Model, { attr } from '@ember-data/model';

export default class GeslachtCode extends Model {
  @attr('string') uri;
  @attr('string') label;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://mu.semte.ch/vocabularies/ext/GeslachtCode',
      label: 'http://www.w3.org/2004/02/skos/core#prefLabel',
    };
  }
}
