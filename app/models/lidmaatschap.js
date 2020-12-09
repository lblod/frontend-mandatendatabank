import Model, { belongsTo } from '@ember-data/model';

export default class Lidmaatschap extends Model {
  @belongsTo('fractie', { inverse: null }) binnenFractie;
  @belongsTo('mandataris', { inverse: null }) lid;
  @belongsTo('tijdsinterval', { inverse: null }) lidGedurende;
}
