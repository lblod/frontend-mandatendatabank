import Model, { belongsTo } from '@ember-data/model';

export default class Lidmaatschap extends Model {
  @belongsTo('fractie', {
    async: true,
    inverse: null,
  })
  binnenFractie;
  @belongsTo('mandataris', {
    async: true,
    inverse: null,
  })
  lid;
  @belongsTo('tijdsinterval', {
    async: true,
    inverse: null,
  })
  lidGedurende;
}
