import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Mandataris extends Model {
  @attr('string') uri;
  @attr('language-string') rangorde;
  @attr('datetime') start;
  @attr('datetime') einde;
  @belongsTo('mandaat', { inverse: null }) bekleedt;
  @belongsTo('lidmaatschap', { inverse: null }) heeftLidmaatschap;
  @belongsTo('persoon', { inverse: null }) isBestuurlijkeAliasVan;
  @hasMany('rechtsgrond-aanstelling', { inverse: null }) rechtsgrondenAanstelling;
  @hasMany('rechtsgrond-beeindiging', { inverse: null }) rechtsgrondenBeeindiging;
  @hasMany('mandataris', { inverse: null }) tijdelijkeVervangingen;
  @hasMany('beleidsdomein-code', { inverse: null }) beleidsdomein;
  @belongsTo('mandataris-status-code', { inverse: null }) status;

  get rdfaBindings() {
    return { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: "http://data.vlaanderen.be/ns/mandaat#Mandataris",
      rangorde: "http://data.vlaanderen.be/ns/mandaat#rangorde",
      start: "http://data.vlaanderen.be/ns/mandaat#start",
      einde: "http://data.vlaanderen.be/ns/mandaat#einde",
      bekleedt: "http://www.w3.org/ns/org#holds",
      isBestuurlijkeAliasVan: "http://data.vlaanderen.be/ns/mandaat#isBestuurlijkeAliasVan",
      heeftLidmaatschap: "http://www.w3.org/ns/org#hasMembership",
      beleidsdomein: "http://data.vlaanderen.be/ns/mandaat#beleidsdomein",
      status: "http://data.vlaanderen.be/ns/mandaat#status"
    }
  }
}
