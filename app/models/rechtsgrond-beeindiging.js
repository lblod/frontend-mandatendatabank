import Model, { hasMany } from '@ember-data/model';

export default class RechtsgrondBeeindiging extends Model {
  @hasMany('mandataris', {
    async: true,
    inverse: null,
  })
  bekrachtigtOntslagenVan;
}
