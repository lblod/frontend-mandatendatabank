import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Kandidatenlijst extends Model {
  @attr lijstnaam;
  @attr lijstnummer;
  @belongsTo('lijsttype', {
    async: true,
    inverse: null,
  })
  lijsttype;
  @belongsTo('rechtstreekse-verkiezing', {
    async: true,
    inverse: null,
  })
  rechtstreekseVerkiezing;
  @hasMany('persoon', {
    async: true,
    inverse: null,
  })
  kandidaten;
}
