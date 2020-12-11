import Model, { attr } from '@ember-data/model';

export default class Tijdsinterval extends Model {
  @attr('date') begin;
  @attr('date') einde;
}
