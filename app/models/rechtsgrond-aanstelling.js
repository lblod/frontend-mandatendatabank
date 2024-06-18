import Model, { hasMany } from '@ember-data/model';

export default class RechtsgrondAanstelling extends Model {
  @hasMany('mandataris', {
    async: true,
    inverse: null,
  })
  bekrachtigtAanstellingenVan;
}
