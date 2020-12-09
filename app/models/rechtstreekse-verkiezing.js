import Model, { attr, belongsTo } from '@ember-data/model';

export default class RechtstreekseVerkiezing extends Model {
  @attr('date') datum;
  @attr('date') geldigheid;
  @belongsTo('bestuursorgaan', { inverse: null }) steltSamen;
}
