import Model, { hasMany } from '@ember-data/model';

export default class RechtsgrondAanstelling extends Model {
  @hasMany('mandataris', { inverse: null }) bekrachtigtAanstellingenVan;
}
