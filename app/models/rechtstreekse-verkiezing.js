import Model, { attr, belongsTo } from '@ember-data/model';

export default class RechtstreekseVerkiezing extends Model {
  @attr('date') datum;
  @attr('date') geldigheid;
  @belongsTo('bestuursorgaan', {
    async: true,
    inverse: null,
  })
  steltSamen;
}
