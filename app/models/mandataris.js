import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Mandataris extends Model {
  @attr uri;
  @attr('language-string') rangorde;
  @attr('datetime') start;
  @attr('datetime') einde;
  @belongsTo('mandaat', {
    async: true,
    inverse: null,
  })
  bekleedt;
  @belongsTo('lidmaatschap', {
    async: true,
    inverse: null,
  })
  heeftLidmaatschap;
  @belongsTo('persoon', {
    async: true,
    inverse: null,
  })
  isBestuurlijkeAliasVan;
  @hasMany('rechtsgrond-aanstelling', {
    async: true,
    inverse: null,
  })
  rechtsgrondenAanstelling;
  @hasMany('rechtsgrond-beeindiging', {
    async: true,
    inverse: null,
  })
  rechtsgrondenBeeindiging;
  @hasMany('mandataris', {
    async: true,
    inverse: null,
  })
  tijdelijkeVervangingen;
  @hasMany('beleidsdomein-code', {
    async: true,
    inverse: null,
  })
  beleidsdomein;
  @belongsTo('mandataris-status-code', {
    async: true,
    inverse: null,
  })
  status;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://data.vlaanderen.be/ns/mandaat#Mandataris',
      rangorde: 'http://data.vlaanderen.be/ns/mandaat#rangorde',
      start: 'http://data.vlaanderen.be/ns/mandaat#start',
      einde: 'http://data.vlaanderen.be/ns/mandaat#einde',
      bekleedt: 'http://www.w3.org/ns/org#holds',
      isBestuurlijkeAliasVan:
        'http://data.vlaanderen.be/ns/mandaat#isBestuurlijkeAliasVan',
      heeftLidmaatschap: 'http://www.w3.org/ns/org#hasMembership',
      beleidsdomein: 'http://data.vlaanderen.be/ns/mandaat#beleidsdomein',
      status: 'http://data.vlaanderen.be/ns/mandaat#status',
    };
  }
}
