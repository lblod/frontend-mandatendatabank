import Model, { hasMany } from '@ember-data/model';

export default class RechtsgrondBeeindiging extends Model {
  @hasMany('mandataris', { inverse: null }) bekrachtigtOntslagenVan;
}
