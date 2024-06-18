import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Kandidatenlijst extends Model {
  @attr lijstnaam;
  @attr lijstnummer;
  @belongsTo('lijsttype', { inverse: null }) lijsttype;
  @belongsTo('rechtstreekse-verkiezing', { inverse: null })
  rechtstreekseVerkiezing;
  @hasMany('persoon', { inverse: null }) kandidaten;
}
