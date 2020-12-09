import Model, { attr } from '@ember-data/model';

export default class Entiteit extends Model {
  @attr('date') datum;
}
